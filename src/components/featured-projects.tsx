import { Badge } from "@/components/ui/badge";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import { projects } from "../data/featured-projects";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Github, Globe } from "lucide-react";
import Link from "next/link";
import { AnimatedTitle } from "./animated-sec";

export default function FeaturedProjects() {
  return (
    <section className="max-w-4xl overflow-hidden">
      <AnimatedTitle>
        <div className="space-y-4 text-center mb-10">
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
        className="m-14 lg:m-20"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <Card className="dark:bg-black">
                <CardContent>
                  <div className="grid grid-cols-1  hover:bg-gray-10 md:grid-cols-2 gap-6 p-2 md:p-6">
                    <div className="flex flex-col h-full justify-between">
                      <div className="space-y-4">
                        <h2 className="text-xl lg:text-3xl font-bold">
                          {project.title}
                        </h2>
                        <p className="text-gray-500 text-sm lg:text-lg dark:text-gray-400">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-10 mt-2">
                        {project.stack.map((tech, idx) => (
                          <Badge
                            key={idx}
                            className="px-3 py-1  select-none"
                            variant="outline"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-col lg:flex-row gap-2">
                        <Link href={project.githubLink}>
                          <Button variant={"outline"} size={"sm"}>
                            <Github className="size-4 me-3 mb-1"></Github>
                            Github
                          </Button>
                        </Link>
                        <Link href={project.liveLink}>
                          <Button size={"sm"}>
                            <Globe className="size-4 me-3 mb-1"></Globe>
                            Live Demo
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="rounded-md overflow-hidden">
                      <Image
                        alt={project.title}
                        className="w-full h-full object-cover"
                        height={600}
                        src={project.imgUrl}
                        style={{
                          objectFit: "cover",
                        }}
                        width={800}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
