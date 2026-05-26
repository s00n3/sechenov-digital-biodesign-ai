import { defineCollection, z } from "astro:content";

const seo = {
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  image: z.string().optional(),
};

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    published: z.boolean().default(true),
    ...seo,
  }),
});

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eventDate: z.coerce.date(),
    format: z.string(),
    location: z.string().optional(),
    registrationUrl: z.string().optional(),
    published: z.boolean().default(true),
    ...seo,
  }),
});

const programs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    audience: z.string(),
    direction: z.string(),
    duration: z.string(),
    format: z.string(),
    ctaLabel: z.string().default("Оставить заявку"),
    published: z.boolean().default(true),
    ...seo,
  }),
});

const cases = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    segment: z.string(),
    task: z.string(),
    solution: z.string(),
    result: z.string(),
    published: z.boolean().default(true),
    ...seo,
  }),
});

const divisions = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    group: z.string(),
    description: z.string(),
    lead: z.string().optional(),
    published: z.boolean().default(true),
    ...seo,
  }),
});

const pages = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

export const collections = { news, events, programs, cases, divisions, pages };
