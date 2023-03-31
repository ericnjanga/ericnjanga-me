export interface Category {
    id: number;
    parentId: number | null;
    label: string;
    hash: string;
    description: string;
}
