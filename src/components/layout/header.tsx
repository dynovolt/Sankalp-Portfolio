"use client";

import React, { useState, useEffect } from "react";
import { navigationItems } from "@/constants/navigation";
import { profile } from "@/constants/profile";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
  const [activeHash, setActiveHash] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setActiveHash("");
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = navigationItems.map(item => item.href.replace("#", ""));

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveHash(itemHref(section));
            break;
          }
        }
      }
    };

    const itemHref = (section: string) => `#${section}`;

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const getHref = (href: string) => {
    return isHome ? href : `/${href}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href={isHome ? "#hero" : "/"} className="font-mono font-semibold tracking-tight text-sm text-foreground hover:text-accent transition-colors">
          {profile.fullName} <span className="text-accent text-[8px] uppercase tracking-widest font-mono">v0.2.0</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={getHref(item.href)}
              className={cn(
                "text-xs font-mono tracking-wide transition-colors duration-200 hover:text-foreground",
                (isHome && activeHash === item.href) ? "text-accent font-semibold" : "text-muted"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-1 text-muted hover:text-foreground focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={getHref(item.href)}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-xs font-mono py-2 border-b border-border/50",
                (isHome && activeHash === item.href) ? "text-accent font-semibold" : "text-muted"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
