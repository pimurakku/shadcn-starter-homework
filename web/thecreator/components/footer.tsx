export default function Footer() {
  return (
    <footer className="flex flex-col gap-10 md:gap-12 lg:gap-16 items-center px-4 py-10 md:px-16 md:py-12 lg:px-40 lg:py-16 w-full">
      {/* Headline & subtitle */}
      <div className="text-center w-full">
        <h2
          className="font-bold text-foreground"
          style={{
            fontSize: "clamp(36px, 3.65vw, 56px)",
            lineHeight: "normal",
            fontFamily: "var(--font-sans)",
          }}
        >
          We are waiting for you to contact us
        </h2>
        <p className="text-xl leading-7 text-muted-foreground mt-4">
          You can write to us at any time and get an instant response.
        </p>
      </div>

      {/* Email input */}
      <div
        className="flex items-center w-full md:w-[354px]"
        style={{
          background: "white",
          border: "1px solid #e5e5e5",
          borderRadius: "8px",
          boxShadow: "0 1px 1px rgba(0,0,0,0.1)",
          height: "36px",
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 border-none outline-none bg-transparent text-sm text-muted-foreground px-3 font-sans"
        />
        <div
          className="flex items-center justify-center text-sm font-medium text-secondary-foreground cursor-pointer flex-shrink-0 mr-1.5 rounded-md"
          style={{ background: "#f5f5f5", height: "24px", width: "63px" }}
        >
          Join
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 md:justify-between w-full" style={{ maxWidth: "1192px" }}>
        {/* Copyright */}
        <div className="flex gap-1 items-center text-xl leading-7 text-foreground">
          <span>©</span>
          <span>Copywriting</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-1 items-center">
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

        {/* Social Links */}
        <div className="flex gap-4 items-center">
          <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Facebook">
            <img src="/img/social-media-facebook-icon.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:opacity-70 transition-opacity" aria-label="LinkedIn">
            <img src="/img/social-media-linkin-icon.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
            <img src="/img/social-media-instagram-icon.png" alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}
