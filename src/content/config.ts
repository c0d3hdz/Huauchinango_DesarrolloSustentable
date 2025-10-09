import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().default('Equipo Huauchinango'),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
