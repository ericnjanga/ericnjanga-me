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
export interface Descriptions {
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


export interface Project {

    intro: Intro;
    descriptions: Descriptions;
    links: Links;
    // categories: Category
    reference: Reference;

    id: number;
    name: string;
    pageUrl: string;
    url: string;
    title: string; 
    shortDescription: string;
    thumbnail: string;
    // createdAt: string;
    categories: Category[];
    subcategories: Category;
    status: projectStatus;
    liveUrl: string;
}

// Describes the API payload
export type ProjectsPayload = {
    payload: Project[];
    total: number;
};