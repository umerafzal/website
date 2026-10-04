import { getCollection, type CollectionEntry } from 'astro:content';

export type ProjectEntry = CollectionEntry<'projects'>;

export type ProjectType = ProjectEntry['data']['type'];

export async function getPublishedProjects() {
  const all = await getCollection('projects');
  return all
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getFeaturedProjects(limit = 5) {
  const published = await getPublishedProjects();
  return published.filter((p) => p.data.featured).slice(0, limit);
}

export async function getProjectsByType(type: ProjectType) {
  const published = await getPublishedProjects();
  return published.filter((p) => p.data.type === type);
}

export function projectSlug(entry: ProjectEntry) {
  return entry.id.replace(/\.mdx?$/, '');
}
