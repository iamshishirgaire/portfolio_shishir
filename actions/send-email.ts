"use server";

import React from "react";
import { Resend } from "resend";
import { getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "../emails/contact-form-email";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";
const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimit = new Ratelimit({
  redis: new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL as string,
    token: process.env.UPSTASH_REDIS_REST_TOKEN as string,
  }),
  limiter: Ratelimit.slidingWindow(2, "60m"),
});
export const sendEmail = async (formdata: {
  email: string;
  message: string;
  userName: string;
}) => {
  let data;
  try {
    const ip = headers().get("x-forwared-for");
    const { remaining, success } = await rateLimit.limit(ip!);
    if (!success || remaining === 0) {
      return {
        error: "Rate limit exceeded",
      };
    }
    data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "shishirgaire35@gmail.com",
      subject: "Message from personal Portfolio website",
      react: React.createElement(ContactFormEmail, {
        message: formdata.message,
        userFirstname: formdata.userName,
        email: formdata.email,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
