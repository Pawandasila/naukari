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
          <SectionReveal>
            <Services />
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <Employers />
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <JobSeeker />
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <Contact />
          </SectionReveal>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
