"""FastAPI app for Murmur de Izvor — handles the contact form submission."""
from __future__ import annotations

import logging

from fastapi import Depends, FastAPI, HTTPException, Request, status
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter
from slowapi.errors import RateLimitExceeded
from slowapi.util import get_remote_address

from .email_service import send_contact_email
from .schemas import ContactRequest, ContactResponse
from .settings import Settings, get_settings

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(name)s: %(message)s")
logger = logging.getLogger("murmur")

settings = get_settings()

limiter = Limiter(key_func=get_remote_address, default_limits=[])
app = FastAPI(
    title="Murmur de Izvor API",
    version="1.0.0",
    description="Backend for the Murmur de Izvor restaurant landing page.",
)
app.state.limiter = limiter

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=False,
    allow_methods=["POST", "GET", "OPTIONS"],
    allow_headers=["Content-Type"],
    max_age=3600,
)


@app.exception_handler(RateLimitExceeded)
async def rate_limit_handler(_request: Request, _exc: RateLimitExceeded):
    raise HTTPException(
        status_code=status.HTTP_429_TOO_MANY_REQUESTS,
        detail="Prea multe încercări. Vă rugăm încercați din nou mai târziu.",
    )


@app.get("/api/health", tags=["meta"])
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post(
    "/api/contact",
    response_model=ContactResponse,
    status_code=status.HTTP_200_OK,
    tags=["contact"],
)
@limiter.limit(settings.contact_rate_limit)
async def submit_contact(
    request: Request,
    payload: ContactRequest,
    config: Settings = Depends(get_settings),
) -> ContactResponse:
    # Honeypot — silently accept but skip sending
    if payload.company:
        logger.info("Honeypot triggered from %s", get_remote_address(request))
        return ContactResponse(ok=True, message="Solicitare primită.")

    try:
        send_contact_email(payload, config)
    except RuntimeError as exc:
        logger.error("Email service not configured: %s", exc)
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Serviciul de email nu este disponibil momentan.",
        ) from exc
    except Exception as exc:
        logger.exception("Failed to send contact email: %s", exc)
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail="Nu am putut trimite mesajul. Vă rugăm încercați din nou.",
        ) from exc

    return ContactResponse(
        ok=True,
        message="Mulțumim! Solicitarea a fost trimisă.",
    )