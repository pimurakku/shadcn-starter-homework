import Header from "./components/header"
import Hero from "./components/hero"
import Partners from "./components/partners"
import HowWeWorkPlatform from "./components/how-we-work-platform"
import HowWeWorkServices from "./components/how-we-work-services"
import HowWeWorkSteps from "./components/how-we-work-steps"
import Reviews from "./components/reviews"
import Charity from "./components/charity"
import Footer from "./components/footer"

export default function TheCreatorPage() {
  return (
    <div className="bg-brown-2 flex flex-col items-start min-h-screen">
      <Header />
      <Hero />
      <Partners />
      <HowWeWorkPlatform />
      <HowWeWorkServices />
      <HowWeWorkSteps />
      <Reviews />
      <Charity />
      <Footer />
    </div>
  )
}
