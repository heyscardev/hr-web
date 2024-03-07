import type { LinkObject, NodeObject } from "react-force-graph-3d";

export interface Language {
  id: number;
  name: string;
  slug: string;
  relations?: number[];
  val?: number;
  color?: string;
  img: string;
}

export type LanguageNode = NodeObject<Language>;
export type LanguageLink = LinkObject<
  Language,
  {
    source: number;
    target: number;
  }
>;
