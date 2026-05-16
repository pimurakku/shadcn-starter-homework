import { assets } from "@/lib/assets"

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-40 py-36 w-full overflow-hidden">
      {/* Decorative left swirl */}
      <div
        className="absolute top-0 opacity-70 pointer-events-none select-none"
        style={{ left: "-80px", width: "340px" }}
      >
        <img src={assets.groupSwirl} alt="" className="w-full object-contain" />
      </div>

      {/* Decorative right swirl */}
      <div
        className="absolute opacity-60 pointer-events-none select-none"
        style={{ bottom: "-40px", right: "-40px", width: "220px" }}
      >
        <img src={assets.group1Swirl} alt="" className="w-full object-contain" />
      </div>

      {/* Floating social icons (decorative) */}
      <div
        className="absolute top-16 right-40 pointer-events-none select-none"
        style={{ transform: "rotate(21.85deg)" }}
      >
        <img src={assets.fbIcon} alt="" className="w-8 h-8 opacity-80" />
      </div>
      <div
        className="absolute bottom-24 left-32 pointer-events-none select-none"
        style={{ transform: "rotate(-17.64deg)" }}
      >
        <img src={assets.fbIcon} alt="" className="w-12 h-12 opacity-70" />
      </div>
      <div
        className="absolute top-28 left-48 pointer-events-none select-none"
        style={{ transform: "rotate(157.75deg) scaleY(-1)" }}
      >
        <img src={assets.instIcon} alt="" className="w-6 h-6 opacity-70" />
      </div>
      <div
        className="absolute bottom-40 right-60 pointer-events-none select-none"
        style={{ transform: "rotate(25.59deg)" }}
      >
        <img src={assets.ytbIcon} alt="" className="w-9 h-9 opacity-80" />
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
          className="flex items-center"
          style={{
            background: "white",
            border: "1px solid #e5e5e5",
            borderRadius: "8px",
            boxShadow: "0 1px 1px rgba(0,0,0,0.1)",
            height: "36px",
            width: "354px",
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
