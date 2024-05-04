import ContactMe from "@/components/contact-section";
import FeaturedProjects from "@/components/featured-projects";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ScrollToTop from "@/components/scroll-to-top";
import SkillsSection from "@/components/skills";
import Testimonials from "@/components/testimonials";
import TimeLine from "@/components/timeline";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <div className="flex flex-col min-h-[100dvh] ">
        <ScrollToTop></ScrollToTop>
        <main className="flex-1">
          <section
            className="w-full h-[100vh] py-12 md:py-24 lg:py-32 xl:py-48 dark:bg-black"
            id="hero-section"
          >
            <HeroSection></HeroSection>
          </section>
          <section
            className="w-full flex items-center justify-center  py-12 md:py-24 lg:py-32 dark:bg-zinc-950 bg-zinc-100 "
            id="projects"
          >
            <FeaturedProjects></FeaturedProjects>
          </section>
          <section
            className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black"
            id="testimonials-section"
          >
            <Testimonials></Testimonials>
          </section>{" "}
          <section
            className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-950"
            id="skills-section"
          >
            <SkillsSection></SkillsSection>
          </section>
          <section
            className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black"
            id="testimonials-section"
          >
            <TimeLine></TimeLine>
          </section>{" "}
          <section
            className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-950 "
            id="contact-section"
          >
            <ContactMe></ContactMe>
          </section>
        </main>
      </div>
    </>
  );
}
