import Contact from "@/components/custom/Contact";
import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import Hero from "@/components/custom/Hero";
import Services from "@/components/custom/Services";
import PageTransition from "@/components/custom/PageTransition";
import SectionReveal from "@/components/custom/SectionReveal";
import Employers from "@/components/custom/Employeer";
import JobSeeker from "@/components/custom/JobSeeker";

export default function Home() {
  return (
    <PageTransition>
      <div className="main">
        <Header />
        <main>
          <Hero />
          <SectionReveal direction="left" delay={0.3}>
            <Services />
          </SectionReveal>
          <SectionReveal direction="right" delay={0.6}>
            <Employers />
          </SectionReveal>
          <SectionReveal direction="fade" delay={0.9}>
            <JobSeeker />
          </SectionReveal>
          <SectionReveal direction="up" delay={1.2}>
            <Contact />
          </SectionReveal>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
