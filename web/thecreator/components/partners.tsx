export default function Partners() {
  return (
    <section
      id="partners"
      className="flex flex-col gap-16 items-center justify-center px-4 py-8 md:px-16 md:py-12 lg:px-40 lg:py-16 w-full"
    >
      <h2
        className="font-bold text-center text-foreground"
        style={{
          fontSize: "clamp(36px, 3.9vw, 60px)",
          lineHeight: 1,
          maxWidth: "922px",
        }}
      >
        Contact us today to explore partnership opportunities!
      </h2>

      <div className="bg-white flex flex-col md:flex-row gap-8 items-start p-6 md:pl-12 md:py-12 lg:pl-24 lg:py-16 rounded-2xl w-full overflow-hidden">
        {/* Title & Description */}
        <div className="flex flex-col gap-4 items-start flex-shrink-0 md:max-w-[50%]">
          <h3
            className="font-semibold text-foreground whitespace-nowrap"
            style={{ fontSize: "48px", lineHeight: "48px" }}
          >
            Partners:
          </h3>
          <p
            className="text-xl leading-7 text-foreground text-wrap"
            style={{ maxWidth: "530px" }}
          >
            Our creative agency forms strong partnerships with diverse businesses, from startups to
            global brands, based on trust, respect, and a shared vision for success.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="flex flex-col md:flex-row gap-8 items-start md:overflow-x-auto pb-1 flex-1" style={{ scrollbarWidth: "none" }}>
          {/* Card 1 — Pink/400 */}
          <div className="flex flex-col gap-3 items-start overflow-hidden p-6 rounded-2xl w-full md:flex-shrink-0 bg-pink-400 md:w-[356px] md:h-[220px]">
            <div className="flex items-center justify-between w-full w-full">
              <img
                src="/img/partner-logo-1.png"
                alt="Partner"
                className="w-10 h-10 object-contain"
              />
              <span className="font-medium text-xl leading-7 text-foreground whitespace-nowrap">
                2008 — Today
              </span>
            </div>
            <p className="text-base leading-6 text-foreground w-full">
              Provides communication between the agency and brands. Collects customer feedback and
              encourages discussion about the product, which helps improve it.
            </p>
          </div>

          {/* Card 2 — Pink/200 */}
          <div className="flex flex-col gap-3 items-start overflow-hidden p-6 rounded-2xl w-full md:flex-shrink-0 bg-pink-200 md:w-[356px] md:h-[220px]">
            <div className="flex items-center justify-between w-full">
              <img
                src="/img/partner-logo-2.png"
                alt="Partner"
                className="w-10 h-10 object-contain"
              />
              <span className="font-medium text-xl leading-7 text-foreground whitespace-nowrap">
                2012 — Today
              </span>
            </div>
            <p className="text-base leading-6 text-foreground w-full">
              Provide unlimited access to artist and designer boards. Provides communication with
              them and creative partnership. Provides participation in creative conferences
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
