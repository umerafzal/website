import { getCollection, type CollectionEntry } from 'astro:content';

export type WritingEntry = CollectionEntry<'writing'>;

export async function getPublishedWriting() {
  const all = await getCollection('writing');
  return all
    .filter((w) => !w.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getWritingIndex(includeDrafts = true) {
  const all = await getCollection('writing');
  const items = includeDrafts ? all : all.filter((w) => !w.data.draft);
  return items.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function writingSlug(entry: WritingEntry) {
  return entry.id.replace(/\.mdx?$/, '');
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
