import { assets } from "@/lib/assets"

export default function HowWeWorkPlatform() {
  return (
    <section
      id="how-we-work"
      className="flex flex-col gap-16 items-center overflow-hidden px-64 py-16 w-full"
    >
      <h2
        className="font-bold text-center text-foreground"
        style={{
          fontSize: "clamp(36px, 3.9vw, 60px)",
          lineHeight: 1,
          maxWidth: "922px",
        }}
      >
        Making it big on any Platform is tougher than you think
      </h2>

      {/* Illustration with social icons */}
      <div
        className="relative flex-shrink-0 overflow-hidden"
        style={{ height: "515px", width: "891px" }}
      >
        {/* Background vector lines */}
        <div
          className="absolute"
          style={{ left: "485px", top: "186px", width: "163px", height: "324px", opacity: 0.5 }}
        >
          <img
            src={assets.iconFacebook}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div
          className="absolute"
          style={{ left: "163px", top: "144px", width: "137px", height: "350px", opacity: 0.5 }}
        >
          <img
            src={assets.iconFacebook}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Pink accent block */}
        <div
          className="absolute bg-pink-400"
          style={{ left: "256px", top: "133px", width: "177px", height: "88px" }}
        />

        {/* Main woman image */}
        <div
          className="absolute bottom-0 overflow-hidden"
          style={{ left: "50%", transform: "translateX(-50%)", width: "773px", height: "515px" }}
        >
          <img
            src={assets.womanPhoto}
            alt="Woman"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full object-cover"
          />
        </div>

        {/* Gradient fade to background */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "158px",
            background: "linear-gradient(to bottom, rgba(248,245,240,0), #f8f5f0)",
            mixBlendMode: "lighten",
          }}
        />

        {/* Floating social icons */}
        <div
          className="absolute pointer-events-none"
          style={{ left: "664px", top: "231px", transform: "rotate(21.85deg)" }}
        >
          <img src={assets.fbIcon} alt="" className="w-8 h-8" />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{ left: "644px", top: "369px", transform: "rotate(17.91deg)" }}
        >
          <img src={assets.instIcon} alt="" style={{ width: "62px", height: "61px" }} />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{ left: "111px", top: "262px", transform: "rotate(157.75deg) scaleY(-1)" }}
        >
          <img src={assets.instIcon} alt="" style={{ width: "45px", height: "44px" }} />
        </div>
        <div
          className="absolute pointer-events-none"
          style={{ left: "40px", top: "379px", transform: "rotate(-19.02deg)" }}
        >
          <img src={assets.ytbIcon} alt="" className="w-4 h-4" />
        </div>
      </div>
    </section>
  )
}
