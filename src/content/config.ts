import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().default('Desconocido'),
    image: z.string().optional(),
  }),
});

const routes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['cultural', 'senderismo']),
    difficulty: z.enum(['facil', 'moderado', 'dificil']),
    image: z.string(),
    duration: z.string(),
    distance: z.string().optional(),
    mapUrl: z.string().optional(),
    guideContacts: z.array(z.object({
      name: z.string(),
      phone: z.string(),
      email: z.string().optional(),
    })).optional(),
  }),
});

export const collections = { blog, routes };
