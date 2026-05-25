"""SMTP email delivery for contact form submissions."""
from __future__ import annotations

import logging
import smtplib
from datetime import datetime, timezone
from email.message import EmailMessage
from email.utils import formataddr

from .schemas import ContactRequest
from .settings import Settings

logger = logging.getLogger(__name__)

SUBJECT = "[Murmur de Izvor] Solicitare nouă de pe site"


def _build_message(payload: ContactRequest, settings: Settings) -> EmailMessage:
    timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")

    text_body = (
        "Solicitare nouă primită prin formularul de pe site.\n\n"
        f"Nume:           {payload.name}\n"
        f"Telefon:        {payload.phone}\n"
        f"Tip solicitare: {payload.event_type or '-'}\n"
        f"Dată preferată: {payload.preferred_date.isoformat() if payload.preferred_date else '-'}\n"
        f"Trimis la:      {timestamp}\n\n"
        "Mesaj:\n"
        f"{payload.message}\n"
    )

    html_body = f"""\
    <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; background:#0d0c0a; color:#f3ece0; padding:32px;">
      <div style="max-width:560px; margin:auto; background:#171411; border:1px solid rgba(201,169,97,0.18); border-radius:16px; padding:32px;">
        <h2 style="font-family: Georgia, serif; color:#c9a961; margin:0 0 8px 0;">Murmur de Izvor</h2>
        <p style="margin:0 0 24px 0; color:#c9bfae; font-size:13px; letter-spacing:0.1em; text-transform:uppercase;">
          Solicitare nouă de pe site
        </p>
        <table style="width:100%; border-collapse:collapse; font-size:14px;">
          <tr><td style="padding:8px 0; color:#c9bfae;">Nume</td><td style="padding:8px 0;">{payload.name}</td></tr>
          <tr><td style="padding:8px 0; color:#c9bfae;">Telefon</td><td style="padding:8px 0;">{payload.phone}</td></tr>
          <tr><td style="padding:8px 0; color:#c9bfae;">Tip solicitare</td><td style="padding:8px 0;">{payload.event_type or '-'}</td></tr>
          <tr><td style="padding:8px 0; color:#c9bfae;">Dată preferată</td><td style="padding:8px 0;">{payload.preferred_date.isoformat() if payload.preferred_date else '-'}</td></tr>
          <tr><td style="padding:8px 0; color:#c9bfae;">Trimis la</td><td style="padding:8px 0;">{timestamp}</td></tr>
        </table>
        <hr style="border:none; border-top:1px solid rgba(201,169,97,0.18); margin:20px 0;" />
        <p style="white-space:pre-wrap; line-height:1.6; margin:0;">{payload.message}</p>
      </div>
    </div>
    """

    msg = EmailMessage()
    msg["Subject"] = SUBJECT
    msg["From"] = formataddr(("Murmur de Izvor", settings.smtp_from))
    msg["To"] = settings.admin_email
    msg["Reply-To"] = f"{payload.name} <{settings.smtp_from}>"
    msg.set_content(text_body)
    msg.add_alternative(html_body, subtype="html")
    return msg


def send_contact_email(payload: ContactRequest, settings: Settings) -> None:
    """Send the contact form payload to the admin inbox.

    Raises:
        RuntimeError: when SMTP is not configured.
        smtplib.SMTPException: on transport failure.
    """
    if not settings.smtp_configured:
        # In dev, log instead of failing — surface clearly.
        logger.warning(
            "SMTP not configured. Contact submission would have been emailed.\n%s",
            payload.model_dump_json(indent=2),
        )
        raise RuntimeError("SMTP nu este configurat pe server.")

    msg = _build_message(payload, settings)

    use_ssl = settings.smtp_port == 465
    if use_ssl:
        with smtplib.SMTP_SSL(settings.smtp_host, settings.smtp_port, timeout=15) as smtp:
            if settings.smtp_user:
                smtp.login(settings.smtp_user, settings.smtp_password)
            smtp.send_message(msg)
    else:
        with smtplib.SMTP(settings.smtp_host, settings.smtp_port, timeout=15) as smtp:
            smtp.ehlo()
            if settings.smtp_use_tls:
                smtp.starttls()
                smtp.ehlo()
            if settings.smtp_user:
                smtp.login(settings.smtp_user, settings.smtp_password)
            smtp.send_message(msg)

    logger.info("Contact email sent to %s", settings.admin_email)
