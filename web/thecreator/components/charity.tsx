export default function Charity() {
  return (
    <section
      id="charity"
      className="flex flex-col items-start px-4 py-10 md:px-16 md:py-12 lg:px-40 lg:py-16 w-full"
    >
      <div className="flex flex-col xl:flex-row gap-8 items-center w-full">

        {/* Charity image card — Pink/400 */}
        <div className="relative overflow-hidden rounded-2xl md:flex-shrink-0 bg-pink-400 w-full md:w-[580px] md:h-[515px] flex flex-col justify-between">
          <img
            src="/img/charity.png"
            alt="Charity"
            className="w-full h-64 md:h-80 object-cover rounded-xl"
          />
          <p className="text-xl leading-7 text-foreground mt-6 p-8">
            We&apos;ve participated in events for children&apos;s education, health initiatives, and
            disaster relief. We&apos;re dedicated to ongoing involvement and exploring new
            opportunities.
          </p>
        </div>

        {/* Info card — White */}
        <div className="bg-white flex flex-col gap-9 items-start p-10 md:p-14 rounded-2xl md:flex-shrink-0 w-full md:w-[580px] md:h-[515px]">
          <h3
            className="font-bold text-foreground w-full"
            style={{ fontSize: "48px", lineHeight: "48px" }}
          >
            Charity
          </h3>
          <p className="text-xl leading-7 text-foreground w-full">
            Our creative agency supports charities globally, using our skills in branding,
            marketing, and social media to make a positive impact on local communities and raise
            awareness about important causes.
          </p>
        </div>

      </div>
    </section>
  )
}
