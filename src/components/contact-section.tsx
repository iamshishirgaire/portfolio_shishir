"use client";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import SubmitBtn from "./submit-email";
import { sendEmail } from "../../actions/send-email";
import { toast } from "sonner";
import { AnimatedSection, AnimatedTitle } from "./animated-sec";
import { SocialLinks } from "@/content/links";

export default function ContactMe() {
  return (
    <section id="contact-section" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid max-w-5xl items-center justify-center gap-8 px-4 text-center md:gap-12 md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-6xl xl:gap-16">
        <div className="space-y-4 md:space-y-6">
          <AnimatedTitle>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Let's Talk
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have a project in mind or just want to say hello? Fill out the
                form below and I'll get back to you as soon as possible.
              </p>
            </div>
          </AnimatedTitle>
          <AnimatedSection>
            <div className="flex justify-center space-x-4 lg:justify-start">
              <LinkComponent
                href={SocialLinks.linkedin}
                src="linkedin"
                alt="Linkedin"
              />
              <LinkComponent
                href={SocialLinks.twitter}
                src="twitter"
                alt="Twitter"
              />
              <LinkComponent
                href={SocialLinks.github}
                src="github"
                alt="Github"
              />
            </div>
          </AnimatedSection>
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <form
            className="space-y-4"
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);

              if (error) {
                toast.error("Failed to send email. Please try again.");
                return;
              }

              toast.success("Email sent successfully!");
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[120px]"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <SubmitBtn></SubmitBtn>
          </form>
        </div>
      </div>
    </section>
  );
}

function LinkComponent({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) {
  return (
    <Link href={href} target="_blank">
      <Image
        className="hover:scale-105 duration-300 transition-transform cursor-pointer"
        src={`/icons/${src}.svg`}
        height={30}
        width={30}
        alt={`${alt} Logo`}
      ></Image>
      <span className="sr-only">{alt}</span>
    </Link>
  );
}
