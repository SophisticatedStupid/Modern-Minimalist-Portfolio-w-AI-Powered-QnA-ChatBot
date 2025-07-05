
export enum Theme {
  Golden = 'golden',
  Silver = 'silver',
  Metallic = 'metallic',
}

export enum Mode {
  Light = 'light',
  Dark = 'dark',
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
  url?: string;
  id?: string;
}

export interface ResearchPaper {
  title: string;
  journal: string;
  year: number;
  url: string;
  authors: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  sourceUrl?: string;
}
