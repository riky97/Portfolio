import { describe, expect, it } from "vitest";
import { about, education, experience, keyAchievements, skillGroups } from "@/data/cv";
import { projects } from "@/data/projects";
import { en } from "./en";
import { it as italian } from "./it";
import { locales, type Localized } from "./types";

type Labelled = [label: string, text: Localized<string>];

/** Every string reachable from a messages object (functions are skipped). */
function strings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (value && typeof value === "object") return Object.values(value).flatMap(strings);
  return [];
}

/** Turns a Localized list into one labelled { en, it } pair per item. */
function zip(label: string, list: Localized<string[]>): Labelled[] {
  return list.en.map((text, i) => [`${label}[${i}]`, { en: text, it: list.it[i] }]);
}

const prose: Labelled[] = [
  ...zip("about", about),
  ...zip("achievement", keyAchievements),
  ...experience.flatMap((e) => zip(`${e.company} bullet`, e.bullets)),
  ...education.flatMap((e) => (e.notes ? zip(`${e.institution.en} note`, e.notes) : [])),
  ...projects.map((p): Labelled => [`${p.title} description`, p.description]),
];

describe("translations", () => {
  it("has no empty interface string in either language", () => {
    for (const messages of [en, italian]) {
      expect(strings(messages).filter((s) => s.trim() === "")).toEqual([]);
    }
  });

  it("keeps the same number of items per language in list content", () => {
    expect(about.it).toHaveLength(about.en.length);
    expect(keyAchievements.it).toHaveLength(keyAchievements.en.length);
    for (const e of experience) expect(e.bullets.it).toHaveLength(e.bullets.en.length);
    for (const e of education) expect(e.notes?.it ?? []).toHaveLength(e.notes?.en.length ?? 0);
    for (const g of skillGroups) expect(g.items.it).toHaveLength(g.items.en.length);
  });

  it.each(prose)("%s is written in every language and actually translated", (_label, text) => {
    for (const locale of locales) expect(text[locale].trim()).not.toBe("");
    // An identical string means the English copy was pasted into the Italian slot.
    expect(text.it).not.toBe(text.en);
  });
});
