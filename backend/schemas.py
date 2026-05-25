from datetime import date
from typing import Literal, Optional

from pydantic import BaseModel, ConfigDict, Field, field_validator

EventType = Literal[
    "Rezervare",
    "Eveniment privat",
    "Corporate",
    "Altă solicitare",
]


class ContactRequest(BaseModel):
    """Payload received from the contact form."""

    model_config = ConfigDict(str_strip_whitespace=True, extra="ignore")

    name: str = Field(min_length=2, max_length=80)
    phone: str = Field(min_length=6, max_length=30)
    message: str = Field(min_length=5, max_length=2000)
    event_type: Optional[EventType] = None
    preferred_date: Optional[date] = None
    # Honeypot — must remain empty
    company: Optional[str] = Field(default="", max_length=0)

    @field_validator("phone")
    @classmethod
    def validate_phone(cls, value: str) -> str:
        cleaned = value.strip()
        allowed = set("+0123456789 ()-.")
        if not all(ch in allowed for ch in cleaned):
            raise ValueError("Număr de telefon invalid")
        digits = sum(ch.isdigit() for ch in cleaned)
        if digits < 6:
            raise ValueError("Număr de telefon invalid")
        return cleaned

    @field_validator("name", "message")
    @classmethod
    def not_only_whitespace(cls, value: str) -> str:
        if not value or not value.strip():
            raise ValueError("Câmp obligatoriu")
        return value.strip()


class ContactResponse(BaseModel):
    ok: bool
    message: str
