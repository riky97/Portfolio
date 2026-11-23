import type { Localized } from "@/i18n/types";

export interface Project {
  title: string;
  description: Localized<string>;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}
