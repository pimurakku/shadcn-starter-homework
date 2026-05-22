export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-8 py-16 md:px-20 md:py-24 lg:px-40 lg:py-36 w-full overflow-hidden">
      {/* Left hand image */}
      <div className="absolute top-0 left-0 pointer-events-none select-none" style={{ width: "220px" }}>
        <img src="/img/hero-left.png" alt="" className="w-full object-contain" />
      </div>

      {/* Right hand image */}
      <div className="absolute top-0 right-0 pointer-events-none select-none" style={{ width: "220px" }}>
        <img src="/img/hero-right.png" alt="" className="w-full object-contain" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-8 items-center justify-center">
        <h1
          className="font-bold text-center text-foreground"
          style={{
            fontSize: "clamp(56px, 6.25vw, 96px)",
            lineHeight: 1,
            maxWidth: "977px",
          }}
        >
          Spark your brand&apos;s imaginative flair with us
        </h1>
        <p
          className="text-xl leading-7 text-center text-muted-foreground"
          style={{ maxWidth: "773px" }}
        >
          Our team combines strategy, design, and technology to breathe life into your brand.
          Collaborate with us to leave a lasting impression on your audience.
        </p>

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
      </div>
    </section>
  )
}
