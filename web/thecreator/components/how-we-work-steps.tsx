export default function HowWeWorkSteps() {
  return (
    <section className="flex flex-col gap-12 items-center px-4 py-10 md:px-20 md:py-12 lg:px-64 lg:py-16 w-full">

      {/* Step 1 — Research & Analysis: text left, image right */}
      <div className="flex flex-col lg:flex-row gap-8 items-center w-full">
        <div className="flex flex-col gap-4 w-full lg:max-w-[420px]">
          <h3 className="font-bold text-foreground text-2xl md:text-[36px] md:leading-[40px]">
            1# Research &amp; Analysis
          </h3>
          <p className="text-lg md:text-xl leading-7">
            Our agency&apos;s research-driven approach involves gathering insights into our clients&apos;
            industries, competitors, and target audiences to develop tailored strategies that deliver
            exceptional results. This deep understanding allows us to create innovative and effective
            campaigns that resonate with our clients&apos; audiences.
          </p>
        </div>
        <img
          src="/img/how-we-work-03-1.png"
          alt="Research & Analysis"
          className="w-4/5 lg:w-[518px] lg:flex-shrink-0 max-w-[50%] object-contain rounded-2xl"
        />
      </div>

      {/* Step 2 — Concept Development: image left, text right */}
      <div className="flex flex-col-reverse lg:flex-row gap-8 items-center w-full">
        <img
          src="/img/how-we-work-03-2.png"
          alt="Concept Development"
          className="w-4/5 lg:w-[518px] lg:flex-shrink-0 max-w-[50%] object-contain rounded-2xl"
        />
        <div className="flex flex-col gap-4 w-full lg:max-w-[420px]">
          <h3 className="font-bold text-foreground text-2xl md:text-[36px] md:leading-[40px]">
            2# Concept development
          </h3>
          <p className="text-lg md:text-xl leading-7">
            Based on the brief and research, the agency&apos;s creative team generates ideas for the
            campaign. These concepts are presented to the client for feedback and refinement.
          </p>
        </div>
      </div>

      {/* Step 3 — Design and Execution: text left, image right */}
      <div className="flex flex-col lg:flex-row gap-8 items-center w-full">
        <div className="flex flex-col gap-4 w-full lg:max-w-[420px]">
          <h3 className="font-bold text-foreground text-2xl md:text-[36px] md:leading-[40px]">
            3# Design and execution
          </h3>
          <p className="text-lg md:text-xl leading-7">
            Once the concept is approved, the agency&apos;s designers and developers bring it to life.
            This includes creating visual assets, writing copy, and developing multimedia content.
          </p>
        </div>
        <img
          src="/img/how-we-work-03-3.png"
          alt="Design and Execution"
          className="w-4/5 lg:w-[518px] lg:flex-shrink-0 max-w-[50%] object-contain rounded-2xl"
        />
      </div>

    </section>
  )
}
