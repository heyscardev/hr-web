import type { LinkObject, NodeObject } from "react-force-graph-3d";

export interface Language {
  id: number;
  name: string;
  slug: string;
  relations?: number[];
  large_name: string;
  description: string;
  projects: string[];
  skills:{
    title: string;
    content: string | JSX.Element;
  }[]
  val?: number;
  color?: string;
  img: string;
  logo?: string;
}

export type LanguageNode = NodeObject<Language>;
export type LanguageLink = LinkObject<
  Language,
  {
    source: number;
    target: number;
  }
>;
