"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/validation";
import { EVENT_OPTIONS, SITE } from "@/lib/constants";
import { cn } from "@/lib/cn";

type Status = "idle" | "loading" | "success" | "error";

const inputBase =
  "w-full rounded-lg border border-gold/15 bg-ebony/70 px-4 py-3.5 text-[15px] text-ivory placeholder:text-beige/40 transition-colors duration-300 focus:border-gold/60 focus:outline-none focus:ring-1 focus:ring-gold/30";

const labelBase =
  "mb-2 block text-[11px] uppercase tracking-widest text-beige/80";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      phone: "",
      message: "",
      event_type: "",
      preferred_date: "",
      company: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("loading");
    setErrorMessage(null);
    try {
      const res = await fetch(`${SITE.apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          phone: values.phone,
          message: values.message,
          event_type: values.event_type || null,
          preferred_date: values.preferred_date || null,
          company: values.company || "",
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.detail ?? "Solicitarea nu a putut fi trimisă.");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "A apărut o eroare. Vă rugăm încercați din nou.",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-gold/15 bg-gradient-to-b from-ebony/80 to-charcoal/70 p-6 sm:p-8 lg:p-10"
    >
      {/* Honeypot — hidden from users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          autoComplete="off"
          tabIndex={-1}
          {...register("company")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelBase}>
            Nume *
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Numele dumneavoastră"
            className={cn(inputBase, errors.name && "border-red-500/60")}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-2 text-xs text-red-400/90">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelBase}>
            Telefon *
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+373 ..."
            className={cn(inputBase, errors.phone && "border-red-500/60")}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-2 text-xs text-red-400/90">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="event_type" className={labelBase}>
            Tip solicitare
          </label>
          <select
            id="event_type"
            className={cn(inputBase, "appearance-none")}
            {...register("event_type")}
          >
            <option value="">Alegeți o opțiune</option>
            {EVENT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="preferred_date" className={labelBase}>
            Dată preferată
          </label>
          <input
            id="preferred_date"
            type="text"
            placeholder="ZZ/LL/AAAA"
            className={cn(inputBase)}
            {...register("preferred_date")}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelBase}>
          Mesaj *
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Spuneți-ne câteva detalii despre solicitare..."
          className={cn(
            inputBase,
            "resize-none",
            errors.message && "border-red-500/60",
          )}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-2 text-xs text-red-400/90">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-beige/60">
          Vă vom contacta în cel mai scurt timp posibil.
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-xs uppercase tracking-widest text-charcoal transition-all duration-300 hover:bg-gold-200 hover:shadow-glow disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={15} className="animate-spin" />
              Se trimite...
            </>
          ) : (
            <>
              Trimite solicitarea
              <Send size={14} strokeWidth={1.6} />
            </>
          )}
        </button>
      </div>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 flex items-start gap-3 rounded-lg border border-gold/30 bg-gold/5 p-4 text-[14px] text-ivory"
            role="status"
          >
            <CheckCircle2 size={18} className="mt-0.5 text-gold" />
            <span>
              Mulțumim! Solicitarea a fost trimisă. Vă vom contacta în curând.
            </span>
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/5 p-4 text-[14px] text-ivory"
            role="alert"
          >
            <AlertCircle size={18} className="mt-0.5 text-red-400" />
            <span>
              {errorMessage ??
                "A apărut o eroare. Vă rugăm încercați din nou."}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
