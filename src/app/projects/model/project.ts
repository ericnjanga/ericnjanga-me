import { Category } from "./category";
import { projectStatus } from "./status";



export interface Project {
    id: number;
    name: string;
    url: string;
    title: string; 
    excerpt: string;
    thumbnail: string;
    dateCreated: string;
    category: Category;
    subCategory: Category;
    status: projectStatus;
    liveUrl: string;
}
