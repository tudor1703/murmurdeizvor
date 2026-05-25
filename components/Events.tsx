"use client";

import {
  Heart,
  Cake,
  Wine,
  Briefcase,
  Crown,
  Users,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import EventCard from "@/components/ui/EventCard";
import { ButtonLink } from "@/components/ui/Button";
import { EVENT_TYPES } from "@/lib/constants";

const ICONS = [Heart, Cake, Wine, Briefcase, Crown, Users];

export default function Events() {
  return (
    <section
      id="evenimente"
      className="relative scroll-mt-24 py-28 sm:py-36 md:py-44"
    >
      <Container>
        <SectionHeader
          eyebrow="Evenimente"
          title="Evenimente într-un cadru memorabil"
          description="De la întâlniri restrânse până la evenimente corporate sau familiale, Murmur de Izvor oferă un cadru elegant, cald și flexibil, potrivit pentru momente care cer atenție la detalii."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EVENT_TYPES.map((e, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <EventCard
                key={e.title}
                index={i}
                title={e.title}
                description={e.description}
                icon={<Icon size={20} strokeWidth={1.4} />}
              />
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <ButtonLink href="#contacte" size="lg" variant="primary">
            Solicită detalii pentru eveniment
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
