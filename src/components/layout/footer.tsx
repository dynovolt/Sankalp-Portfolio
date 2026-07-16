import React from "react";
import { profile } from "@/constants/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="w-full border-t border-border bg-background py-8 flex justify-center">
      <div className="max-w-5xl w-full px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted">
        <div>
          <span>Designed & Built by </span>
          <span className="text-foreground font-semibold">{profile.fullName}</span>
        </div>
        <div className="flex gap-4">
          <span>v0.1.0</span>
          <span>&copy; {profile.currentYear}</span>
        </div>
      </div>
    </footer>
  );
}
