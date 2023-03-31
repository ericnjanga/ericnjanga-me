import { Category } from "./category";


export interface Project {
    id: number;
    url: string;
    title: string; 
    excerpt: string;
    thumbnail: string;
    dateCreated: string;
    category: Category;
    subCategory: Category;
    published: boolean;
    liveUrl: string;
}
