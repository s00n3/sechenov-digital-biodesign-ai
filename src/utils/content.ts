import { getCollection } from "astro:content";

export const isPublished = (entry: { data: { published?: boolean } }) => entry.data.published !== false;

export async function getPublishedCollection<T extends "news" | "events" | "programs" | "cases" | "divisions">(name: T) {
  return (await getCollection(name)).filter(isPublished);
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long", year: "numeric" }).format(date);
}
