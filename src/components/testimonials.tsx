import { testimonials } from "@/content/testimonials";
import { getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { AnimatedSection } from "./animated-sec";

const Testimonials = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What People Say
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from some of my satisfied clients and collaborators.
            </p>
          </div>
        </AnimatedSection>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            startIndex: 1,
          }}
          className="py-32 m-10"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem className="lg:basis-1/2 xl:basis-1/3" key={index}>
                <AnimatedSection>
                  <Card className="group overflow-hidden rounded-lg bg-white hover:bg-gray-50 dark:hover:bg-zinc-950 duration-500  shadow-sm transition-all hover:shadow-lg  dark:bg-black dark:hover:shadow-md">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage
                            alt={testimonial.name}
                            src={testimonial.imgUrl}
                          />
                          <AvatarFallback>
                            {getInitials(testimonial.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="text-lg font-semibold">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.title} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="text-lg font-semibold leading-snug">
                        {testimonial.message}
                      </blockquote>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </CarouselItem>
            ))}

            <CarouselItem className="lg:basis-1/2 xl:basis-1/3"></CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
