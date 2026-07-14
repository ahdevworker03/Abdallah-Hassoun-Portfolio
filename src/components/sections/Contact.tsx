import { useState } from "react"
import { contactLinks } from "../../data/contact"
import Button from "../ui/Button"

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

type FormStatus = "idle" | "loading" | "success" | "error"

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = "Name is required"
  if (!data.email.trim()) {
    errors.email = "Email is required"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email"
  }
  if (!data.message.trim()) {
    errors.message = "Message is required"
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters"
  }
  return errors
}

const inputBase =
  "w-full rounded-md border bg-surface px-4 py-3 font-body text-base text-text-primary transition-colors duration-200 placeholder:text-text-secondary/50 disabled:cursor-not-allowed disabled:opacity-60"

function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>("idle")
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const next = { ...form, [field]: e.target.value }
    setForm(next)
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validate(next)[field] }))
    }
  }

  const handleBlur = (field: keyof FormData) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    setErrors((prev) => ({ ...prev, [field]: validate(form)[field] }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    setTouched({ name: true, email: true, message: true })

    if (Object.keys(validationErrors).length > 0) return

    setStatus("loading")
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      })
      if (!res.ok) throw new Error("Failed to send")
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
      setTouched({})
    } catch {
      setStatus("error")
    }
  }

  const inputClass = (field: keyof FormData) =>
    [
      inputBase,
      errors[field] && touched[field]
        ? "border-red-500 focus:border-red-500"
        : "border-border focus:border-primary",
    ].join(" ")

  return (
    <section id="contact" className="reveal glass-section py-20 text-center">
      <div className="mx-auto max-w-[600px] px-4">
        <h2 className="mb-4 font-heading text-3xl font-semibold leading-tight text-text-primary md:text-4xl">
          Get In Touch
        </h2>
        <p className="mb-8 text-base leading-relaxed text-text-secondary">
          I'm always happy to connect with fellow learners, share resources,
          or chat about anything tech-related. Whether you have a question or
          just want to say hi, don't hesitate to reach out!
        </p>

        {status === "success" && (
          <div className="mb-8 rounded-md bg-accent-soft px-6 py-4 text-accent">
            <p className="font-medium">Message sent! I'll get back to you soon.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mb-8 flex flex-col gap-5 text-left" noValidate>
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-primary">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange("name")}
                onBlur={handleBlur("name")}
                className={inputClass("name")}
                disabled={status === "loading"}
                aria-invalid={!!(errors.name && touched.name)}
              />
              {errors.name && touched.name && (
                <p className="mt-1 text-sm text-red-500" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-primary">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                className={inputClass("email")}
                disabled={status === "loading"}
                aria-invalid={!!(errors.email && touched.email)}
              />
              {errors.email && touched.email && (
                <p className="mt-1 text-sm text-red-500" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-primary">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message..."
                value={form.message}
                onChange={handleChange("message")}
                onBlur={handleBlur("message")}
                className={inputClass("message")}
                disabled={status === "loading"}
                aria-invalid={!!(errors.message && touched.message)}
              />
              {errors.message && touched.message && (
                <p className="mt-1 text-sm text-red-500" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            {status === "error" && (
              <div
                className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400"
                role="alert"
              >
                Something went wrong. Please try again or email me directly.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-md border-2 border-primary bg-primary px-7 py-3 font-body text-base font-medium text-white no-underline transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 disabled:hover:shadow-none"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>

        <div className="flex flex-col items-center gap-5">
          <p className="text-sm text-text-secondary">Or reach out directly:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {contactLinks.map((link) => (
              <Button
                key={link.label}
                variant="secondary"
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
