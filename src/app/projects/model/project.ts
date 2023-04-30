import { Category } from "./category";
import { projectStatus } from "./status";

export interface Reference {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    industry: string;
    teamCount: number;
}


export interface Project {
    id: number;
    name: string;
    pageUrl: string;
    url: string;
    title: string; 
    shortDescription: string;
    thumbnail: string;
    reference: Reference;
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