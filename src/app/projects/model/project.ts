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
}

export type imageType = 'phone' | 'tablet' | 'laptop' | 'monitor';

export interface ProjImg {
    hero: string;
    body: string;
    type: imageType;
}


export interface Project {
    id: number;
    pageUrl: string;
    // ...
    intro: Intro;
    description: Description;
    links: Links;
    categories: Category[];
    reference: Reference;
    image: ProjImg;

    // id: number;
    // name: string;
    // url: string;
    // title: string; 
    // shortDescription: string;
    // thumbnail: string;
    // subcategories: Category;
    // status: projectStatus;
    // liveUrl: string;
}

// Describes the API payload
export type ProjectsPayload = {
    payload: Project[];
    total: number;
};