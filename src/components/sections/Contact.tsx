import { useState } from "react"
import { contactDetails } from "../../data/contact"

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT
const FORMSPREE_MISSING = !FORMSPREE_ENDPOINT

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

  const handleChange =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    if (FORMSPREE_MISSING) {
      setStatus("error")
      return
    }

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
        : "border-border focus:border-primary focus:ring-2 focus:ring-focus-ring",
    ].join(" ")

  return (
    <section id="contact" className="reveal bg-background py-20 md:py-28">
      <div className="mx-auto max-w-container px-4 md:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
          <div className="grid items-stretch md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div className="border-b border-border p-6 md:border-b-0 md:border-r md:p-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Contact
              </p>
              <h2 className="mb-4 font-heading text-3xl font-semibold leading-tight text-text-primary md:text-4xl">
                Let's Connect
              </h2>
              <p className="mb-8 text-base leading-relaxed text-text-secondary">
                I'm open to Web Developer internship opportunities, project discussions, and
                technology-related conversations.
              </p>

              <address className="flex flex-col gap-3 not-italic">
                {contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex items-center gap-4 rounded-xl border border-border bg-background px-4 py-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                      <i className={detail.icon} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="mb-1 text-xs font-medium uppercase tracking-[0.05em] text-text-secondary">
                        {detail.label}
                      </p>
                      {detail.url ? (
                        <a
                          href={detail.url}
                          className="break-words text-sm font-medium text-accent no-underline transition-colors duration-200 hover:text-primary"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-text-primary">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </address>
            </div>

            <div className="p-6 md:p-10">
              {status === "success" && (
                <div className="mb-8 rounded-md bg-accent-soft px-6 py-4 text-accent">
                  <p className="font-medium">Message sent! I'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mb-8 flex flex-col gap-5" noValidate>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-text-primary"
                  >
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
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-text-primary"
                  >
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
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-text-primary"
                  >
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

                {FORMSPREE_MISSING && (
                  <div
                    className="rounded-md bg-amber-900/20 px-4 py-3 text-sm text-amber-400"
                    role="alert"
                  >
                    The contact form is not configured yet. Please email me directly using the links
                    below.
                  </div>
                )}

                {status === "error" && (
                  <div
                    className="rounded-md bg-red-900/20 px-4 py-3 text-sm text-red-400"
                    role="alert"
                  >
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading" || FORMSPREE_MISSING}
                  className="w-full rounded-md border-2 border-primary bg-primary px-7 py-3 font-body text-base font-medium text-white no-underline transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 disabled:hover:shadow-none"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
