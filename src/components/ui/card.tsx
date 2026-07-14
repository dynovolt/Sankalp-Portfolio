import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card text-foreground transition-all duration-300 hover:border-neutral-800 shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
