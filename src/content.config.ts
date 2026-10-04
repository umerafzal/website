import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectType = z.enum(['commercial', 'personal', 'experiment']);
const projectStatus = z.enum([
  'idea',
  'prototype',
  'mvp',
  'active',
  'shipped',
  'archived',
]);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: projectType,
    status: projectStatus,
    date: z.coerce.date(),
    technologies: z.array(z.string()),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    category: z.string().optional(),
    employer: z.string().optional(),
    role: z.string().optional(),
    showConfidentialityNote: z.boolean().default(false),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    readingTimeMinutes: z.number().optional(),
  }),
});

export const collections = { projects, writing };
