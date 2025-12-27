import { z } from "zod";

export const zodValidationsForProducts = z.object({
  //todo all the keys are from the form data. user has entered text on these inputs.
  //todo notice how the error message shown here is sent to the input fields.

  name: z
    .string()
    .max(40, { message: "Maximum length is 20 characters" })
    .min(3, { message: "Minimum characters needed is 3" }),

  slug: z
    .string()
    .max(20, { message: "Maximum length is 20 characters" })
    .min(3, { message: "Minimum characters needed is 3" })
    .regex(/^[a-zA-Z0-9-]+$/, {
      message: "Only alphanumeric characters and hyphens are allowed",
    }),

  tagline: z
    .string()
    .max(300, { message: "Maximum length is 300 characters" })
    .min(10, { message: "Minimum characters needed is 10" }),

  description: z
    .string()
    .max(2000, { message: "Maximum length is 2000 characters" })
    .min(10, { message: "Minimum characters needed is 10" }),

  websiteurl: z.string().url({ message: "Please enter a valid URL" }),

  //todo this converts. "AI, SaaS, Modern " -> ["ai", "saas", "modern"]
  tags: z
    .string()
    .min(1, { message: "Tags are required" })
    .transform((value) =>
      value.split(",").map((tag) => tag.trim().toLowerCase().toString())
    ),
});
