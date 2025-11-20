import Contact from "@/components/custom/Contact";
import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import Hero from "@/components/custom/Hero";
import Process from "@/components/custom/Process";
import RecentJobs from "@/components/custom/RecentJobs";
import Services from "@/components/custom/Services";
import PageTransition from "@/components/custom/PageTransition";
import SectionReveal from "@/components/custom/SectionReveal";

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
          <Process />
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <RecentJobs />
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
