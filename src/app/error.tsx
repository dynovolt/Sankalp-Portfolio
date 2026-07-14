"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground px-6 text-center">
      <h2 className="text-xl font-semibold tracking-tight">System Exception</h2>
      <p className="mt-2 text-sm text-muted max-w-md font-mono">
        {error.message || "An unexpected runtime error occurred inside the layout shell."}
      </p>
      <button
        onClick={() => reset()}
        className="mt-6 px-4 py-2 text-sm font-medium bg-foreground text-background rounded-md hover:opacity-90 transition-opacity"
      >
        Retry Transaction
      </button>
    </div>
  );
}
