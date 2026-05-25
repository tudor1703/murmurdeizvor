# Murmur de Izvor

Premium landing page for **Murmur de Izvor**, a luxury restaurant in Drăsliceni, Moldova.

- **Frontend** — Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · Framer Motion · React Hook Form + Zod
- **Backend** — FastAPI · Pydantic v2 · SMTP email delivery
- **Design** — dark luxury palette (charcoal · matte gold · ivory), serif headlines (Playfair Display), Inter body

---

## Project structure

```
.
├── app/                    # Next.js App Router
├── components/             # Page sections + UI primitives
├── lib/                    # constants, validation, helpers
├── public/images/          # drop real photos here
├── backend/                # FastAPI app
└── README.md
```

---

## 1. Frontend setup

```bash
# install
npm install

# configure
cp .env.example .env.local
# edit .env.local — set NEXT_PUBLIC_API_URL to your backend URL

# run dev
npm run dev          # http://localhost:3000

# production build
npm run build
npm start
```

### Replacing placeholder images

Hero, About, and Gallery currently load demo photos from Unsplash. Drop the
real files into `public/images/` (e.g. `hero.jpg`, `interior-1.jpg`, …) and
swap the `src` values in:

- `components/Hero.tsx`
- `components/About.tsx`
- `lib/constants.ts` (the `GALLERY_IMAGES` array)

For SEO / Open Graph, also add `public/images/og-image.jpg` (1200×630).

### Replacing reviews

The `REVIEWS` array in `lib/constants.ts` is **mock data**, marked as such in
the source. Replace with real testimonials when available.

### Maps

The Google Maps embed in `lib/constants.ts` (`SITE.mapEmbed` / `SITE.mapLink`)
uses the address string. For a more accurate pin, swap to a place-id embed:

```ts
mapEmbed: "https://www.google.com/maps/embed?pb=...your-place-id...",
```

---

## 2. Backend setup

The backend is a small FastAPI service that validates the contact form and
sends an email to the admin inbox via SMTP.

```bash
cd backend

# create venv (uv shown — pip works equally well)
uv venv
source .venv/bin/activate
uv pip install -r requirements.txt

# configure
cp .env.example .env
# edit .env — fill in SMTP_* and ADMIN_EMAIL

# run dev (from repo root, so the package import path resolves)
cd ..
uvicorn backend.main:app --reload --port 8000
```

Health check: `GET http://localhost:8000/api/health` → `{"status": "ok"}`.

### Environment variables

| Variable             | Purpose                                         |
| -------------------- | ----------------------------------------------- |
| `ADMIN_EMAIL`        | Recipient of contact submissions               |
| `SMTP_HOST`          | SMTP server hostname                           |
| `SMTP_PORT`          | 587 (STARTTLS) or 465 (SSL)                    |
| `SMTP_USER`          | SMTP username / API key                        |
| `SMTP_PASSWORD`      | SMTP password / API secret                     |
| `SMTP_FROM`          | "From" address shown in the email              |
| `SMTP_USE_TLS`       | `true` to use STARTTLS on port 587             |
| `ALLOWED_ORIGINS`    | Comma-separated list of allowed frontend URLs  |
| `CONTACT_RATE_LIMIT` | e.g. `5/minute` — per-IP limit on `/api/contact` |

Works with any SMTP provider (Mailgun, SendGrid, Postmark, Brevo, Gmail SMTP, etc).

### Anti-spam

- **Honeypot** — hidden `company` field; submissions that fill it are
  silently accepted but never emailed.
- **Rate limit** — per-IP throttle via `slowapi` (default 5/minute).
- **Strict validation** — Pydantic schemas reject empty / malformed payloads.

---

## 3. API

`POST /api/contact`

```json
{
  "name": "Ion Popescu",
  "phone": "+373 79 000 000",
  "message": "Aș dori o rezervare pentru 4 persoane.",
  "event_type": "Rezervare",
  "preferred_date": "2026-06-15"
}
```

Response: `200 OK` `{ "ok": true, "message": "..." }`.
Errors: `422` (validation) · `429` (rate limit) · `502` / `503` (email failure).

---

## 4. Deployment notes

**Frontend** — deploy to Vercel (zero-config) or any Node host. Set
`NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_SITE_URL` in the platform's env.

**Backend** — deploy as a container or to Fly.io / Railway / Render:

```dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY backend ./backend
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

Make sure `ALLOWED_ORIGINS` includes the production frontend URL.

---

## 5. Quality checklist

- ✅ Mobile-first responsive layout
- ✅ Semantic HTML, accessible labels, keyboard-navigable lightbox
- ✅ Reduced-motion preference respected
- ✅ SEO metadata + JSON-LD `Restaurant` schema
- ✅ Optimized `next/image` with priority hero
- ✅ Honeypot + rate limit on contact endpoint
- ✅ Reusable component architecture

---

© Murmur de Izvor. *Rafinament în mijlocul naturii.*
