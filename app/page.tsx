import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TestimonialsTop from "./components/TestimonialsTop"
import Pricing from "./components/Pricing"
import Review from "./components/Review"
import SetupGuide from "./components/SetupGuide"
import Testimonials from "./components/Testimonials"
import ServicesDropdown from "./components/ServicesDropdown"
import Features from "./components/Features"
import FAQs from "./components/FAQs"
import NinjaTrader from "./components/NinjaTrader"
import RelatedProducts from "./components/RelatedProducts"
import Footer from "./components/Footer"

export default function Home() {
  return (
    // Check
    <main className="flex-auto bg-[#120e1b] mb-0">
      <Navbar />
      <TestimonialsTop />
      <Hero />
      <Pricing />
      <Review />
      <SetupGuide />
      <Testimonials />
      <ServicesDropdown />
      <Features />
      <FAQs />
      <NinjaTrader />
      <RelatedProducts />
      <Footer />
    </main>
  )
}
