import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none ${
          variant === "outline"
            ? "bg-transparent border border-input hover:bg-accent hover:text-accent-foreground"
            : variant === "secondary"
              ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              : variant === "ghost"
                ? "hover:bg-accent hover:text-accent-foreground"
                : "bg-primary text-primary-foreground shadow-sm hover:bg-primary/80"
        } ${
          size === "sm"
            ? "px-2.5 py-1.5 text-xs"
            : size === "lg"
              ? "px-8 py-6 text-lg"
              : size === "icon"
                ? "h-9 w-9"
                : "px-4 py-2"
        } ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"

export { Button }
