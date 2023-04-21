import { Category } from "./category";
import { projectStatus } from "./status";



export interface Project {
    id: number;
    name: string;
    pageUrl: string;
    url: string;
    title: string; 
    shortDescription: string;
    thumbnail: string;
    createdAt: string;
    categories: Category[];
    subcategories: Category;
    status: projectStatus;
    liveUrl: string;
}
