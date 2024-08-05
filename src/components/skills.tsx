import Link from "next/link";
import { skills } from "../data/skills";
import { AnimatedSection, AnimatedTitle } from "./animated-sec";
import { LogoImage } from "./logoImage";
const SkillsSection = () => {
  return (
    <div className="container px-4 md:px-6">
      <AnimatedTitle>
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Skills
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Here are some of the technologies and tools I'm proficient in.
          </p>
        </div>
      </AnimatedTitle>
      <div className="grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;

function SkillCard({
  skill,
}: {
  skill: { name: string; description: string; logo: string; link: string };
}) {
  return (
    <AnimatedSection>
      <Link href={skill.link} target="_blank">
        <div className="group overflow-hidden rounded-lg bg-white hover:bg-gray-50  dark:hover:bg-popover/50   ease-in-out duration-500 shadow-sm transition-all   dark:bg-black border ">
          <div className="p-4">
            <LogoImage src={skill.logo} alt={skill.name} />
            <h3 className="mt-2 text-xl font-semibold">{skill.name}</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              {skill.description}
            </p>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
}
