import React from "react";
import { cn } from "@/lib/utils";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export type ButtonProps<E extends React.ElementType = "button"> = ButtonBaseProps & {
  as?: E;
} & Omit<React.ComponentPropsWithoutRef<E>, keyof ButtonBaseProps | "as">;

type ButtonComponent = <E extends React.ElementType = "button">(
  props: ButtonProps<E> & { ref?: React.ComponentPropsWithRef<E>["ref"] }
) => React.ReactElement | null;

export const Button: ButtonComponent = React.forwardRef(
  <E extends React.ElementType = "button">(
    { className, variant = "primary", size = "md", as, ...props }: ButtonProps<E>,
    ref: React.ComponentPropsWithRef<E>["ref"]
  ) => {
    const Component = as || "button";
    const baseStyles =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-mono";

    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-neutral-200 shadow-sm",
      secondary: "bg-card border border-border text-foreground hover:bg-neutral-900",
      outline: "border border-border text-foreground hover:bg-card hover:text-accent",
      ghost: "text-muted hover:text-foreground hover:bg-card",
    };

    const sizes = {
      sm: "h-9 px-3 text-xs",
      md: "h-10 px-4",
      lg: "h-11 px-6 text-base",
    };

    const combinedClass = cn(baseStyles, variants[variant], sizes[size], className);

    return (
      <Component
        ref={ref}
        className={combinedClass}
        {...props}
      />
    );
  }
) as unknown as ButtonComponent;

(Button as any).displayName = "Button";

