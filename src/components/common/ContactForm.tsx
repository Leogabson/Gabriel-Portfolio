"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(100),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"IDLE" | "SUCCESS" | "ERROR">("IDLE");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("IDLE");
    
    // Use environment variable or fallback to a standard form submission
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "xzkvpyde"; // placeholder or default ID
    
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("SUCCESS");
        reset();
      } else {
        setSubmitStatus("ERROR");
      }
    } catch (err) {
      console.error("Formspree submission error:", err);
      setSubmitStatus("ERROR");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-mono text-label-sm text-primary uppercase">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className="input-underline font-mono text-on-background focus:border-primary w-full"
            {...register("name")}
          />
          {errors.name && (
            <span className="font-mono text-[11px] text-red-400 mt-1" role="alert">
              {errors.name.message}
            </span>
          )}
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-mono text-label-sm text-primary uppercase">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            className="input-underline font-mono text-on-background focus:border-primary w-full"
            {...register("email")}
          />
          {errors.email && (
            <span className="font-mono text-[11px] text-red-400 mt-1" role="alert">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-mono text-label-sm text-primary uppercase">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Briefly describe your project or inquiry..."
          rows={4}
          className="input-underline font-mono text-on-background focus:border-primary resize-none w-full"
          {...register("message")}
        />
        {errors.message && (
          <span className="font-mono text-[11px] text-red-400 mt-1" role="alert">
            {errors.message.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="cta-button w-full py-4 font-mono text-label-sm font-bold uppercase tracking-[0.2em] transition-all disabled:opacity-50"
      >
        {isSubmitting ? "SENDING..." : "SEND INQUIRY"}
      </button>

      {submitStatus === "SUCCESS" && (
        <p className="font-mono text-label-sm text-[#74d3f4] text-center mt-4">
          ✓ MESSAGE SENT SUCCESSFULLY
        </p>
      )}
      {submitStatus === "ERROR" && (
        <p className="font-mono text-label-sm text-red-400 text-center mt-4">
          ✕ FAILED TO SEND. PLEASE TRY AGAIN.
        </p>
      )}
    </form>
  );
}
