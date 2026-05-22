export default function HowWeWorkServices() {
  return (
    <section className="relative flex flex-col gap-8 md:gap-12 lg:gap-16 items-center px-8 py-10 md:px-24 md:py-12 lg:px-80 lg:py-16 w-full overflow-hidden">
      {/* Left hand image */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none w-20 md:w-60">
        <img src="/img/how-we-work-02-left.png" alt="" className="w-full object-contain" />
      </div>

      {/* Right hand image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none w-20 md:w-60">
        <img src="/img/how-we-work-02-right.png" alt="" className="w-full object-contain" />
      </div>

      <h2
        className="font-bold text-center text-foreground relative z-10 w-full"
        style={{ fontSize: "clamp(36px, 3.9vw, 60px)", lineHeight: 1 }}
      >
        We do it for you. No more struggling to grow on any Platform
      </h2>

      <h3
        className="font-bold text-center text-foreground relative z-10 w-full"
        style={{ fontSize: "clamp(22px, 2vw, 30px)", lineHeight: "36px" }}
      >
        Work with our expert strategists writers, editors, and producers to create content
        <br />
        that transforms your content
      </h3>

      <p className="text-xl leading-7 text-center text-foreground relative z-10 w-full">
        No managing a team of freelancers or spending countless hours trying to master all the
        skillsets Platform requires - all you need is The Creator
      </p>
    </section>
  )
}
