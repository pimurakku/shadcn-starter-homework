import { assets } from "@/lib/assets"

export default function HowWeWorkSteps() {
  return (
    <section className="flex flex-col gap-16 items-center overflow-hidden px-64 py-16 w-full">
      {/* Step 1 — Research & Analysis */}
      <div className="flex gap-8 items-center w-full">
        <div
          className="flex flex-col gap-4 items-start flex-shrink-0 text-foreground"
          style={{ maxWidth: "420px" }}
        >
          <h3
            className="font-bold text-foreground whitespace-nowrap"
            style={{ fontSize: "36px", lineHeight: "40px" }}
          >
            1# Research &amp; Analysis
          </h3>
          <p className="text-xl leading-7" style={{ width: "396px" }}>
            Our agency&apos;s research-driven approach involves gathering insights into our clients&apos;
            industries, competitors, and target audiences to develop tailored strategies that deliver
            exceptional results. This deep understanding allows us to create innovative and effective
            campaigns that resonate with our clients&apos; audiences.
          </p>
        </div>

        <div
          className="relative overflow-hidden flex-shrink-0"
          style={{ height: "515px", width: "518px" }}
        >
          <img
            src={assets.imageResearch}
            alt="Research"
            className="absolute bottom-0 object-cover"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              height: "100%",
              width: "149%",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "158px",
              background: "linear-gradient(to bottom, rgba(248,245,240,0), #f8f5f0)",
              mixBlendMode: "lighten",
            }}
          />
          {/* Decorative remove-bg icons */}
          <div
            className="absolute pointer-events-none"
            style={{ left: "361px", top: "198px", transform: "rotate(30.48deg)" }}
          >
            <img
              src={assets.removeBg}
              alt=""
              style={{ width: "45px", height: "70px", objectFit: "contain" }}
            />
          </div>
          <div
            className="absolute pointer-events-none"
            style={{ left: "37px", top: "109px", transform: "rotate(-22.08deg)" }}
          >
            <img
              src={assets.removeBg}
              alt=""
              style={{ width: "67px", height: "105px", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      {/* Step 2 — Concept Development */}
      <div className="flex gap-8 items-center justify-end w-full">
        <div
          className="relative overflow-hidden flex-shrink-0"
          style={{ height: "515px", width: "518px" }}
        >
          <img
            src={assets.imageConcept}
            alt="Concept"
            className="absolute bottom-0 object-cover"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              height: "431px",
              width: "124.8%",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "158px",
              background: "linear-gradient(to bottom, rgba(248,245,240,0), #f8f5f0)",
              mixBlendMode: "lighten",
            }}
          />
          <img
            src={assets.removeBg3}
            alt=""
            className="absolute object-cover"
            style={{ left: "67px", top: "190px", width: "189px", height: "189px" }}
          />
        </div>

        <div className="flex flex-col gap-4 items-start flex-shrink-0 text-foreground">
          <h3
            className="font-bold whitespace-nowrap"
            style={{ fontSize: "36px", lineHeight: "40px" }}
          >
            2# Concept development
          </h3>
          <p className="text-xl leading-7" style={{ width: "396px" }}>
            Based on the brief and research, the agency&apos;s creative team generates ideas for the
            campaign. These concepts are presented to the client for feedback and refinement.
          </p>
        </div>
      </div>

      {/* Step 3 — Design and Execution */}
      <div className="flex gap-8 items-center justify-center w-full">
        <div className="flex flex-col gap-4 items-start flex-shrink-0 text-foreground">
          <h3
            className="font-bold whitespace-nowrap"
            style={{ fontSize: "36px", lineHeight: "40px" }}
          >
            3# Design and execution
          </h3>
          <p className="text-xl leading-7" style={{ width: "396px" }}>
            Once the concept is approved, the agency&apos;s designers and developers bring it to life.
            This includes creating visual assets, writing copy, and developing multimedia content.
          </p>
        </div>

        <div
          className="relative overflow-hidden flex-shrink-0"
          style={{ height: "515px", width: "518px" }}
        >
          <img
            src={assets.imageDesign}
            alt="Design"
            className="absolute bottom-0 object-cover"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              height: "100%",
              width: "149%",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "158px",
              background: "linear-gradient(to bottom, rgba(248,245,240,0), #f8f5f0)",
              mixBlendMode: "lighten",
            }}
          />
          {/* Figma logo decoration */}
          <div
            className="absolute pointer-events-none"
            style={{ left: "63px", top: "72px", transform: "rotate(-23.93deg)" }}
          >
            <img
              src={assets.figmaIcon}
              alt=""
              style={{ width: "72px", height: "108px", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
