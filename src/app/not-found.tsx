import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground px-6 text-center">
      <h2 className="text-2xl font-mono tracking-tight text-accent">404</h2>
      <p className="mt-2 text-sm text-muted font-mono">
        The requested address could not be resolved.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 text-sm font-medium bg-card border border-border text-foreground rounded-md hover:bg-neutral-900 transition-colors"
      >
        Return to Headquarters
      </Link>
    </div>
  );
}
