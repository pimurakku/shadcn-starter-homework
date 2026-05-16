import { assets } from "@/lib/assets"

export default function Partners() {
  return (
    <section
      id="partners"
      className="relative flex flex-col gap-16 items-center justify-center overflow-hidden px-40 py-16 w-full"
    >
      {/* Decorative background shape */}
      <div
        className="absolute left-0 top-0 opacity-30 pointer-events-none select-none"
        style={{ left: "-80px", width: "600px" }}
      >
        <img src={assets.vector4} alt="" className="w-full" />
      </div>

      <h2
        className="font-bold text-center text-foreground relative z-10"
        style={{
          fontSize: "clamp(36px, 3.9vw, 60px)",
          lineHeight: 1,
          maxWidth: "922px",
        }}
      >
        Contact us today to explore partnership opportunities!
      </h2>

      <div className="bg-white flex gap-8 items-start px-24 py-16 rounded-2xl w-full relative z-10">
        {/* Title & Description */}
        <div className="flex flex-col gap-4 items-start flex-shrink-0">
          <h3
            className="font-semibold text-foreground whitespace-nowrap"
            style={{ fontSize: "48px", lineHeight: "48px" }}
          >
            Partners:
          </h3>
          <p
            className="text-xl leading-7 text-foreground"
            style={{ width: "530px" }}
          >
            Our creative agency forms strong partnerships with diverse businesses, from startups to
            global brands, based on trust, respect, and a shared vision for success.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="flex gap-8 items-start flex-wrap">
          {/* Card 1 — Pink/400 */}
          <div
            className="flex flex-col gap-3 items-start overflow-hidden p-6 rounded-2xl flex-shrink-0 bg-pink-400"
          >
            <div className="flex items-center justify-between" style={{ width: "356px" }}>
              <img
                src={assets.partnerLogo1}
                alt="Partner"
                className="w-10 h-10 object-contain"
              />
              <span className="font-medium text-xl leading-7 text-foreground whitespace-nowrap">
                2008 — Today
              </span>
            </div>
            <p className="text-base leading-6 text-foreground" style={{ width: "356px" }}>
              Provides communication between the agency and brands. Collects customer feedback and
              encourages discussion about the product, which helps improve it.
            </p>
          </div>

          {/* Card 2 — Pink/200 */}
          <div
            className="flex flex-col gap-3 items-start overflow-hidden p-6 rounded-2xl flex-shrink-0 bg-pink-200"
          >
            <div className="flex items-center justify-between" style={{ width: "356px" }}>
              <img
                src={assets.partnerLogo2}
                alt="Partner"
                className="w-10 h-10 object-contain"
              />
              <span className="font-medium text-xl leading-7 text-foreground whitespace-nowrap">
                2012 — Today
              </span>
            </div>
            <p className="text-base leading-6 text-foreground" style={{ width: "356px" }}>
              Provide unlimited access to artist and designer boards. Provides communication with
              them and creative partnership. Provides participation in creative conferences
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
