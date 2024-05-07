"use client";
import { SocialLinks } from "../data/links";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection, AnimatedTitle } from "./animated-sec";
import { Input } from "./ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { sendEmail } from "../../actions/send-email";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email(),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(100, {
      message: "Message must be at most 100 characters.",
    }),
});

export default function ContactMe() {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
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
        <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-black">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(async (formdata) => {
                setLoading(true);
                const { data, error } = await sendEmail({
                  email: formdata.email,
                  message: formdata.message,
                  userName: formdata.fullName,
                });
                setLoading(false);
                if (error) {
                  toast.error(error);
                }
                if (data) {
                  toast.success("Success. Get back to you soon");
                  form.reset();
                }
              })}
              className="space-y-8  dark:bg-black"
            >
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Full Name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email Address" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Message" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="group flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                ) : (
                  <>{loading ? "Sending..." : "Send"} </>
                )}
              </Button>
            </form>
          </Form>
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
