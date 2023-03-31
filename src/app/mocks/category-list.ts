import { Category } from "../projects/model/category";

export const CATEGORY_DATABASE: Category[] = [
    {
        id: 0,
        parentId: null,
        label: '+UI Development',
        hash: 'ui-development',
        description: '...',
    },
    {
        id: 2,
        parentId: null,
        label: '-UX Design',
        hash: 'ux-design',
        description: '....',
    },
    {
        id: 3,
        parentId: 1,
        label: 'Quick UI Design',
        hash: 'quick-ui-design',
        description: '....',
    },
    {
        id: 4,
        parentId: 1,
        label: 'Small scale',
        hash: 'small-scale',
        description: '....',
    },
    {
        id: 5,
        parentId: 1,
        label: 'Research',
        hash: 'ux-research',
        description: '....',
    },
    {
        id: 6,
        parentId: 1,
        label: 'Large scale',
        hash: 'large-scale',
        description: '....',
    },
];

export const EMPTY_CATEGORY: Category = {
    id: 0,
    parentId: 0,
    label: '',
    hash: '',
    description: '',
};



