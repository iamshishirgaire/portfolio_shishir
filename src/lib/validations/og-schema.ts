import * as z from "zod";

export const ogImageSchema = z.object({
  heading: z.string(),
  mode: z.enum(["light", "dark"]).default("dark"),
});
