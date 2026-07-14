interface ButtonProps {
  variant: "primary" | "secondary" | "cv"
  href?: string
  target?: string
  rel?: string
  download?: string
  className?: string
  children: React.ReactNode
}

const variantStyles: Record<ButtonProps["variant"], string> = {
  primary:
    "border-2 border-primary bg-primary text-on-primary hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25",
  secondary:
    "border border-primary bg-transparent text-primary hover:bg-primary hover:text-on-primary hover:shadow-lg hover:shadow-primary/20",
  cv: "btn-cv border border-text-secondary bg-transparent text-text-secondary hover:bg-text-secondary hover:text-white hover:shadow-lg hover:shadow-text-secondary/15",
}

function Button({ variant, href, target, rel, download, className = "", children }: ButtonProps) {
  const base = [
    "inline-block rounded-md px-7 py-3 font-body text-base font-medium no-underline transition-all duration-200 hover:scale-[1.02]",
    variantStyles[variant],
    className,
  ].join(" ")

  return (
    <a href={href} target={target} rel={rel} download={download} className={base}>
      {children}
    </a>
  )
}

export default Button
