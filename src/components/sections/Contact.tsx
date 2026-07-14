import { contactLinks } from "../../data/contact"
import Button from "../ui/Button"

function Contact() {
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
        <div className="flex flex-col items-center gap-5">
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
