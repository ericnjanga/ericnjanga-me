import { Category } from "./category";
import { projectStatus } from "./status";


export interface Intro {
    pageUrl: string;
    shortDescription: string;
    thumbnail: string;
    title: string;
}
export interface Reference {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    industry: string;
    teamCount: number;
}
export interface Description {
    title: string;
    context: string;
    contribution: string;
    constraints: string;
}
export interface Links {
    git: string;
    figma: string;
    figmaJam: string;
    prototype: string;
    presentation: string;
    live: string;
    devProcessVideo: string;
}

export type imageType = 'phone' | 'tablet' | 'laptop' | 'monitor';

export interface ProjImg {
    hero: string;
    body: string;
    type: imageType;
}
export interface Tool {
    title: string;
    shortDescription: string;
}


export interface Project {
    id: number;
    pageUrl: string;
    // ...
    intro: Intro;
    descriptions: Description;
    links: Links;
    categories: Category[];
    references: Reference;
    images: ProjImg;
}

// Describes the API payload
export type ProjectsPayload = {
    payload: Project[];
    total: number;
};





export interface ProjectDetail {
    id: number;
    pageUrl: string;
    // ...
    intro: Intro;
    description: Description;
    links: Links;
    categories: Category[];
    references: Reference;
    tools: Tool[];
    images: ProjImg;
};
