import { assets } from "@/lib/assets"

const charityLogosRow1 = [
  assets.charityLogo1,
  assets.charityLogo2,
  assets.charityLogo3,
  assets.charityLogo4,
]

const charityLogosRow2 = [
  assets.charityLogo5,
  assets.charityLogo6,
  assets.charityLogo7,
  assets.charityLogo8,
]

export default function Charity() {
  return (
    <section
      id="charity"
      className="flex flex-col items-start overflow-hidden px-40 py-16 w-full"
    >
      <div className="flex gap-8 items-start w-full">
        {/* Partner Logos Card — Pink/400 */}
        <div
          className="relative overflow-hidden rounded-2xl flex-shrink-0 bg-pink-400"
          style={{ width: "580px", height: "515px" }}
        >
          {/* Row 1 logos */}
          <div
            className="absolute flex gap-4 items-center"
            style={{ top: "56px", left: "50%", transform: "translateX(calc(-50% + 14px))" }}
          >
            {charityLogosRow1.map((src, i) => (
              <div
                key={i}
                className="rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 bg-pink-200"
                style={{ width: "120px", height: "120px" }}
              >
                <img src={src} alt="" className="w-16 h-16 object-contain" />
              </div>
            ))}
          </div>

          {/* Row 2 logos */}
          <div
            className="absolute flex gap-4 items-center"
            style={{ top: "192px", left: "50%", transform: "translateX(calc(-50% - 18px))" }}
          >
            {charityLogosRow2.map((src, i) => (
              <div
                key={i}
                className="rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 bg-pink-200"
                style={{ width: "120px", height: "120px" }}
              >
                <img src={src} alt="" className="w-16 h-16 object-contain" />
              </div>
            ))}
          </div>

          {/* Description text */}
          <p
            className="absolute text-xl leading-7 text-foreground"
            style={{ left: "56px", top: "331px", width: "412px" }}
          >
            We&apos;ve participated in events for children&apos;s education, health initiatives, and
            disaster relief. We&apos;re dedicated to ongoing involvement and exploring new
            opportunities.
          </p>
        </div>

        {/* Info Card — White */}
        <div
          className="bg-white flex flex-col gap-9 items-start overflow-hidden p-14 rounded-2xl flex-shrink-0"
          style={{ width: "580px", height: "515px", textAlign: "left" }}
        >
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
