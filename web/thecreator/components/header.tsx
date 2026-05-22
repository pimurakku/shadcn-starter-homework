"use client"

import { useState } from "react"
import { assets } from "@/lib/assets"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ background: "rgba(252,249,246,0.95)", backdropFilter: "blur(8px)" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2 md:px-16 md:pt-8 md:pb-3 lg:px-40 lg:pt-12 lg:pb-4">
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <img src={assets.logo} alt="The Creator" className="w-8 h-8" />
          <span
            style={{
              fontFamily: "var(--font-kulim-park), sans-serif",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "24px",
              color: "#0a0a0a",
            }}
          >
            The Creator
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-1 items-center">
          <a href="#partners" className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors">Partners</a>
          <a href="#how-we-work" className="px-4 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary transition-colors">How we work</a>
          <a href="#review" className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors">Review</a>
          <a href="#charity" className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors">Charity</a>
        </nav>

        {/* Desktop CTA */}
        <button
          className="hidden lg:flex bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg h-9 hover:bg-[#333] transition-colors"
          style={{ boxShadow: "0 1px 1px rgba(0,0,0,0.1)" }}
        >
          Join The Creator
        </button>

        {/* Hamburger button (mobile/tablet) */}
        <button
          className="lg:hidden flex items-center justify-center p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile/tablet menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col w-full" style={{ background: "rgba(252,249,246,0.98)" }}>
          <nav className="flex flex-col px-4 md:px-16 py-2">
            <a onClick={() => setMenuOpen(false)} href="#partners" className="py-4 text-base font-medium text-foreground border-b border-border">Partners</a>
            <a onClick={() => setMenuOpen(false)} href="#how-we-work" className="py-4 text-base font-medium text-foreground border-b border-border">How we work</a>
            <a onClick={() => setMenuOpen(false)} href="#review" className="py-4 text-base font-medium text-foreground border-b border-border">Review</a>
            <a onClick={() => setMenuOpen(false)} href="#charity" className="py-4 text-base font-medium text-foreground">Charity</a>
          </nav>
          <div className="px-4 md:px-16 py-4">
            <button
              className="w-full bg-primary text-primary-foreground text-sm font-medium py-3 rounded-lg hover:bg-[#333] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Join The Creator
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
