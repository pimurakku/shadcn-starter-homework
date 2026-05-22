export default function HowWeWorkPlatform() {
  return (
    <section
      id="how-we-work"
      className="flex flex-col gap-16 items-center px-4 py-12 md:px-20 lg:px-64 w-full"
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

      <img
        src="/img/how-we-work-01.png"
        alt="Making it big on any platform"
        className="w-full max-w-4xl object-contain"
      />
    </section>
  )
}
