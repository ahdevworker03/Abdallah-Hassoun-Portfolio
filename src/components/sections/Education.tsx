import { education, trainingItems } from "../../data/education"

function Education() {
  return (
    <section id="education" className="reveal bg-background py-20">
      <div className="mx-auto max-w-container px-4 md:px-8">
        <h2 className="mb-10 font-heading text-3xl font-semibold leading-tight text-text-primary md:text-4xl">
          Education & Professional Development
        </h2>

        <div className="mb-10">
          <h3 className="mb-4 font-heading text-lg font-semibold text-text-primary">Education</h3>
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <div className="mb-5">
              <h4 className="font-heading text-lg font-medium text-text-primary">
                {education.institution}
              </h4>
              <p className="mt-0.5 text-sm leading-relaxed text-text-secondary">
                {education.location}
              </p>
            </div>

            <p className="mb-5 text-sm font-medium leading-relaxed text-text-primary">
              {education.degree}
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <p className="mb-0.5 text-xs font-medium uppercase tracking-[0.05em] text-text-secondary">
                  Expected Graduation
                </p>
                <p className="text-sm font-medium text-text-primary">
                  {education.expectedGraduation}
                </p>
              </div>
              <div>
                <p className="mb-0.5 text-xs font-medium uppercase tracking-[0.05em] text-text-secondary">
                  Current Status
                </p>
                <p className="text-sm font-medium text-text-primary">{education.status}</p>
              </div>
              <div>
                <p className="mb-0.5 text-xs font-medium uppercase tracking-[0.05em] text-text-secondary">
                  GPA
                </p>
                <p className="text-sm font-medium text-text-primary">{education.gpa}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-lg font-semibold text-text-primary">
            Professional Development
          </h3>
          <div className="flex flex-col gap-4">
            {trainingItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
              >
                <h4 className="mb-2 font-heading text-base font-medium text-text-primary">
                  {item.title}
                </h4>

                {(item.location || item.provider) && (
                  <p className="mb-2 text-sm leading-relaxed text-text-secondary">
                    {item.location && `${item.location}`}
                    {item.location && item.provider && " — "}
                    {item.provider && (
                      <>
                        {item.provider}
                        {item.instructor && <> · {item.instructor}</>}
                      </>
                    )}
                  </p>
                )}

                {item.description && (
                  <p className="mb-2 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                )}

                {item.duration && (
                  <p className="mb-2 text-sm leading-relaxed text-text-secondary">
                    Duration: {item.duration}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span
                    className={
                      item.status === "Completed"
                        ? "font-medium text-accent"
                        : "font-medium text-text-secondary"
                    }
                  >
                    {item.status}
                  </span>

                  {item.certificateUrl && (
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-accent no-underline transition-all duration-200 hover:text-primary hover:scale-[1.02]"
                      aria-label={`${item.title} — View Certificate`}
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square text-[0.65rem]" />
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
