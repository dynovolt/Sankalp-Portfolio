import React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  id: string;
  className?: string;
  heading?: string;
}

export function SectionContainer({
  children,
  id,
  className,
  heading,
  ...props
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 border-b border-border w-full flex justify-center scroll-mt-20",
        className
      )}
      {...props}
    >
      <div className="max-w-5xl w-full px-6 md:px-8 flex flex-col gap-8">
        {heading && (
          <div className="flex flex-col gap-2">
            <h2 className="text-xs font-mono tracking-widest text-accent uppercase">
              {heading}
            </h2>
            <div className="h-[1px] w-8 bg-accent" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
