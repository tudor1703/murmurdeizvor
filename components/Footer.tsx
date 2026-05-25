import Container from "@/components/ui/Container";
import GoldDivider from "@/components/ui/GoldDivider";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-gold/10 bg-charcoal-200 pb-10 pt-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="font-serif text-2xl">
              <span className="gold-gradient-text">Murmur</span>
              <span className="text-ivory/90"> de Izvor</span>
            </div>
            <p className="mt-3 font-serif italic text-beige/80">
              {SITE.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-gold/80">
              Navigare
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm text-beige/80">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-gold/80">
              Contact
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm text-beige/80">
              <li>{SITE.address}</li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-gold"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <GoldDivider className="mt-16" withDot={false} />

        <p className="mt-8 text-center text-[11px] uppercase tracking-widest text-beige/50">
          © {year} Murmur de Izvor. Toate drepturile rezervate.
        </p>
      </Container>
    </footer>
  );
}
