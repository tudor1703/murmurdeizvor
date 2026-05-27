import { z } from "zod";
import { EVENT_OPTIONS } from "./constants";

const emptyToUndefined = z
  .string()
  .optional()
  .transform((v) => (v === "" ? undefined : v));

export const contactSchema = z.object({
  name: z
    .string({ required_error: "Numele este obligatoriu" })
    .trim()
    .min(2, "Introduceți cel puțin 2 caractere")
    .max(80, "Numele este prea lung"),
  phone: z
    .string({ required_error: "Telefonul este obligatoriu" })
    .trim()
    .min(6, "Număr de telefon invalid")
    .max(30, "Număr de telefon invalid")
    .regex(/^[+0-9\s().-]+$/, "Folosiți doar cifre și caractere uzuale"),
  message: z
    .string()
    .trim()
    .max(2000, "Mesajul este prea lung")
    .optional()
    .or(z.literal("")),
  event_type: emptyToUndefined.pipe(
    z
      .enum([...EVENT_OPTIONS] as [string, ...string[]])
      .optional(),
  ),
  preferred_date: emptyToUndefined,
  // Honeypot — must be empty
  company: z
    .string()
    .max(0, "Spam detectat")
    .optional()
    .or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
