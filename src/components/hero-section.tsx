import Link from "next/link";
import { Button } from "./ui/button";
import { AnimatedImage, AnimatedSection } from "./animated-sec";
import Image from "next/image";
import { SocialLinks } from "../data/links";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="container h-full items-center flex  justify-center  px-4 md:px-6"
    >
      <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
        <AnimatedSection>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl` md:text-5xl lg:text-6xl/none">
              Hi, I'm Shishir Gaire
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              A{" "}
              <span className="text-primary">
                passionate, Self-taught Fullstack Web developer{" "}
              </span>
              with a focus on creating beautiful, responsive, and user-friendly
              web applications.
            </p>
            <div className="flex gap-4">
              <Link href={"#contact-section"}>
                <Button>Get in touch</Button>
              </Link>
              <Link href={SocialLinks.resume}>
                <Button variant={"ghost"}>View Resume</Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedImage>
          <Image
            alt="Shishir Gaire"
            className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
            height="500"
            src="/images/profile.jpg"
            width="500"
          />
        </AnimatedImage>
      </div>
    </section>
  );
  {
  }
};

export default HeroSection;
