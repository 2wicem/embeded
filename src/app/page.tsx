import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Facts } from "@/components/facts";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { MobileBar } from "@/components/mobile-bar";
import { Recruiter } from "@/components/recruiter";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-24 sm:pb-0">
        <Hero />
        <Facts />
        <Work />
        <Skills />
        <Experience />
        <About />
        <Recruiter />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
