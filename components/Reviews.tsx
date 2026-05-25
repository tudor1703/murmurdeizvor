"use client";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ReviewCard from "@/components/ui/ReviewCard";
import { REVIEWS } from "@/lib/constants";

export default function Reviews() {
  return (
    <section
      id="recenzii"
      className="relative scroll-mt-24 bg-charcoal-100 py-28 sm:py-36 md:py-44"
    >
      <Container>
        <SectionHeader
          eyebrow="Recenzii"
          title="Ce spun oaspeții despre experiența lor"
          description="Câteva impresii lăsate de cei care au descoperit atmosfera locului."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r, i) => (
            <ReviewCard
              key={r.name}
              index={i}
              name={r.name}
              text={r.text}
              rating={r.rating}
              context={r.context}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
