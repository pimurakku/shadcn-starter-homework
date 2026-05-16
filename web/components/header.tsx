import { assets } from "@/lib/assets"

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-40 pt-12 pb-4 w-full"
      style={{ background: "rgba(252,249,246,0.95)", backdropFilter: "blur(8px)" }}
    >
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

      {/* Navigation */}
      <nav className="flex gap-1 items-center">
        <a
          href="#partners"
          className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
        >
          Partners
        </a>
        <a
          href="#how-we-work"
          className="px-4 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary transition-colors"
        >
          How we work
        </a>
        <a
          href="#review"
          className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
        >
          Review
        </a>
        <a
          href="#charity"
          className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
        >
          Charity
        </a>
      </nav>

      {/* CTA Button */}
      <button
        className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg h-9 hover:bg-[#333] transition-colors"
        style={{ boxShadow: "0 1px 1px rgba(0,0,0,0.1)" }}
      >
        Join The Creator
      </button>
    </header>
  )
}
