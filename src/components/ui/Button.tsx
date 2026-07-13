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
    "border-primary bg-primary text-white hover:brightness-90",
  secondary:
    "border-primary bg-transparent text-primary hover:bg-primary hover:text-white",
  cv: "border-text-secondary bg-transparent text-text-secondary hover:bg-text-secondary hover:text-white",
}

function Button({ variant, href, target, rel, download, className = "", children }: ButtonProps) {
  const base = [
    "inline-block rounded-md border-2 px-7 py-3 font-body text-base font-medium no-underline transition-all duration-200",
    variant === "cv" ? "border" : "border-2",
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
