import { assets } from "@/lib/assets"

export default function HowWeWorkServices() {
  return (
    <section className="relative flex flex-col gap-16 items-center px-80 py-16 w-full overflow-hidden">
      {/* Decorative vector left */}
      <div
        className="absolute pointer-events-none select-none opacity-80"
        style={{ left: "-75px", top: 0, width: "460px" }}
      >
        <img src={assets.vector9} alt="" className="w-full" />
      </div>

      {/* Decorative vector right */}
      <div
        className="absolute pointer-events-none select-none opacity-70"
        style={{ right: "-30px", top: "128px", width: "370px" }}
      >
        <img src={assets.vector10} alt="" className="w-full" />
      </div>

      {/* Like icon decorations */}
      <div
        className="absolute pointer-events-none select-none"
        style={{ left: "210px", top: "280px", transform: "rotate(-14.34deg)" }}
      >
        <img src={assets.likeIcon} alt="" style={{ width: "120px", height: "102px" }} />
      </div>
      <div
        className="absolute pointer-events-none select-none"
        style={{ right: "210px", top: "215px", transform: "rotate(-165.66deg) scaleY(-1)" }}
      >
        <img src={assets.likeIcon} alt="" style={{ width: "120px", height: "102px" }} />
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
