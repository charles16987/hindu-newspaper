import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";

export default function App() {
  return (
    <main className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Hero />
      <Benefits />
      <HowItWorks />
      <WhyChooseUs />
      <FAQ />
      <Footer />
      <StickyCTA />
    </main>
  );
}
