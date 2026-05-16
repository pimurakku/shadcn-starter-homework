import Header from "@/components/header"
import Hero from "@/components/hero"
import Partners from "@/components/partners"
import HowWeWorkPlatform from "@/components/how-we-work-platform"
import HowWeWorkServices from "@/components/how-we-work-services"
import HowWeWorkSteps from "@/components/how-we-work-steps"
import Reviews from "@/components/reviews"
import Charity from "@/components/charity"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Partners />
        <HowWeWorkPlatform />
        <HowWeWorkServices />
        <HowWeWorkSteps />
        <Reviews />
        <Charity />
      </main>
      <Footer />
    </>
  )
}
