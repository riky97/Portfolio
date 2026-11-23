/// <reference types="node" />
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { locales } from "@/i18n/types";
import { projects } from "./projects";

// Vitest runs from the project root, so public/ is resolved from there.
const publicDir = resolve(process.cwd(), "public");

describe("projects data", () => {
  it("has at least one project", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it.each(projects.map((p) => [p.title, p] as const))("%s is complete", (_title, project) => {
    expect(project.title.trim()).not.toBe("");
    expect(project.tags.length).toBeGreaterThan(0);
    for (const locale of locales) {
      expect(project.description[locale].trim(), `description.${locale}`).not.toBe("");
    }
  });

  it.each(projects.map((p) => [p.title, p.image] as const))(
    "%s points to an image that exists in public/",
    (_title, image) => {
      expect(image.startsWith("/")).toBe(true);
      expect(existsSync(`${publicDir}${image}`)).toBe(true);
    },
  );

  it("has unique titles (they are used as React keys)", () => {
    const titles = projects.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
  });
});
