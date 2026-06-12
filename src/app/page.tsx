import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Approach from "@/components/Approach";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyUs />
      <Approach />
      <Industries />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  );
}
