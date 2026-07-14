export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-4">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-accent border-t-transparent" />
        <p className="text-sm font-mono text-muted">Loading environment...</p>
      </div>
    </div>
  );
}
