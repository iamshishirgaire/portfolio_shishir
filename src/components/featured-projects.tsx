import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/featured-projects";
import { AnimatedTitle } from "./animated-sec";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function FeaturedProjects() {
  return (
    <section className="max-w-4xl overflow-hidden">
      <AnimatedTitle>
        <div className=" flex items-center justify-center flex-col  mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Here are some of my awesome projects.
          </p>
        </div>
      </AnimatedTitle>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          startIndex: 1,
        }}
        className="m-5 lg:m-20"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <Card className="dark:bg-black">
                <CardContent>
                  <div className="grid grid-cols-1 items-center hover:bg-gray-10 md:grid-cols-2 md:gap-6 p-1 md:p-6">
                    <div className="flex flex-col h-full justify-between">
                      <div className="space-y-4">
                        <h2 className="text-xl pt-4 lg:text-3xl font-bold">
                          {project.title}
                        </h2>
                        <p className="text-gray-500 text-sm lg:text-lg dark:text-gray-400">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap min-h-16 gap-2  mb-10 mt-2">
                        {project.stack.map((tech, idx) => (
                          <Badge
                            key={idx}
                            className="px-3 py-1 h-fit  select-none"
                            variant="outline"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-col lg:flex-row gap-2">
                        {project.githubLink && (
                          <Link href={project.githubLink}>
                            <Button variant={"outline"} size={"sm"}>
                              <Github className="size-4 me-3 mb-1"></Github>
                              Github
                            </Button>
                          </Link>
                        )}
                        {project.liveLink && (
                          <Link href={project.liveLink}>
                            <Button variant={"outline"} size={"sm"}>
                              <Globe className="size-4 me-3 mb-1"></Globe>
                              Live
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>

                    <div className="rounded-md overflow-hidden border h-[250px]">
                      <Image
                        alt={project.title}
                        className="w-full h-full object-left-bottom rounded-md"
                        height={500}
                        src={project.imgUrl}
                        style={{
                          objectFit: "cover",
                        }}
                        width={500}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </section>
  );
}
