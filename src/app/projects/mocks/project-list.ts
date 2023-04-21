import { Project } from "../model/project";
import { Category } from "../model/category";
import { CATEGORY_DATABASE, EMPTY_CATEGORY } from "./category-list";


export const PROJECTS_DATABASE: Project[] = [


    // {
    //     id: 2,
    //     name: 'loblaws-marketplace',
    //     url: 'loblaws-marketplace',
    //     title: '***Loblaws Marketplace', 
    //     shortDescription: 'Helped creating an online market place for the largest supermarket chain in Canada.',
    //     thumbnail: './../../../assets/img/loblaws-marketplace.png',
    //     createdAt: '4/04/2020',
    //     categories: CATEGORY_DATABASE[0],
    //     subcategories: CATEGORY_DATABASE[5],
    //     status: 'published',
    //     liveUrl: '',
    // }, 
    // {
    //     id: 10,
    //     name: 'meroe-global',
    //     url: 'meroe-global',
    //     title: 'Corporate website design', 
    //     shortDescription: 'Design of a corporate website for a French communication agency.',
    //     thumbnail: './../../../assets/img/meroe-global.png',
    //     createdAt: '08/27/2020',
    //     categories: CATEGORY_DATABASE[0],
    //     subcategories: CATEGORY_DATABASE[3],
    //     status: 'published',
    //     liveUrl: 'https://finafrik.co.uk/',
    // }, 
    // {
    //     id: 10,
    //     name: 'ppcb-website',
    //     url: 'ppcb-website',
    //     title: 'ppcb-website', 
    //     shortDescription: 'Design of a corporate website for a French communication agency.',
    //     thumbnail: './../../../assets/img/ppcb-website.png',
    //     createdAt: '10/23/2020',
    //     categories: CATEGORY_DATABASE[0],
    //     subcategories: CATEGORY_DATABASE[3],
    //     status: 'published',
    //     liveUrl: 'https://finafrik.co.uk/',
    // }, 
    // {
    //     id: 10,
    //     name: 'george-floyd-memorial-website',
    //     url: 'george-floyd-memorial-website',
    //     title: 'george-floyd-memorial-website', 
    //     shortDescription: '...',
    //     thumbnail: './../../../assets/img/finafrik-uk.png',
    //     createdAt: '4/06/2022',
    //     categories: CATEGORY_DATABASE[0],
    //     subcategories: CATEGORY_DATABASE[3],
    //     status: 'published',
    //     liveUrl: 'https://finafrik.co.uk/',
    // }, 
    // {
    //     id: 10,
    //     name: 'club-des-amoureux-du-basket',
    //     url: 'club-des-amoureux-du-basket',
    //     title: 'club-des-amoureux-du-basket', 
    //     shortDescription: '...',
    //     thumbnail: './../../../assets/img/finafrik-uk.png',
    //     createdAt: '4/06/2022',
    //     categories: CATEGORY_DATABASE[0],
    //     subcategories: CATEGORY_DATABASE[3],
    //     status: 'published',
    //     liveUrl: 'https://finafrik.co.uk/',
    // }, 
    // {
    //     id: 10,
    //     name: 'phica-website',
    //     url: 'phica-website',
    //     title: 'phica-website', 
    //     shortDescription: '...',
    //     thumbnail: './../../../assets/img/finafrik-uk.png',
    //     createdAt: '4/06/2022',
    //     categories: CATEGORY_DATABASE[0],
    //     subcategories: CATEGORY_DATABASE[3],
    //     status: 'published',
    //     liveUrl: 'https://finafrik.co.uk/',
    // }, 
    // {
    //     id: 10,
    //     name: 'boulevard-des-philosophes',
    //     url: 'boulevard-des-philosophes',
    //     title: 'boulevard-des-philosophes', 
    //     shortDescription: '...',
    //     thumbnail: './../../../assets/img/finafrik-uk.png',
    //     createdAt: '4/06/2022',
    //     categories: CATEGORY_DATABASE[0],
    //     subcategories: CATEGORY_DATABASE[3],
    //     status: 'published',
    //     liveUrl: 'https://finafrik.co.uk/',
    // }, 
    // {
    //     id: 10,
    //     name: 'mkz-technologies',
    //     url: 'mkz-technologies',
    //     title: 'mkz-technologies', 
    //     shortDescription: '...',
    //     thumbnail: './../../../assets/img/finafrik-uk.png',
    //     createdAt: '4/06/2022',
    //     categories: CATEGORY_DATABASE[0],
    //     subcategories: CATEGORY_DATABASE[3],
    //     status: 'published',
    //     liveUrl: 'https://finafrik.co.uk/',
    // }, 
    // {
    //     id: 10,
    //     name: 'activation-beaute',
    //     url: 'activation-beaute',
    //     title: 'Design concept for a beauty emulator', 
    //     shortDescription: '...',
    //     thumbnail: './../../../assets/img/finafrik-uk.png',
    //     createdAt: '4/06/2022',
    //     categories: CATEGORY_DATABASE[0],
    //     subcategories: CATEGORY_DATABASE[3],
    //     status: 'published',
    //     liveUrl: 'https://finafrik.co.uk/',
    // }, 
    // {
    //     id: 10,
    //     name: 'finafrik-uk',
    //     url: 'finafrik-uk',
    //     title: 'Finafrik UK', 
    //     shortDescription: 'Coding of a WordPress website whose template was provided by a third-party.',
    //     thumbnail: './../../../assets/img/finafrik-uk.png',
    //     createdAt: '4/06/2022',
    //     categories: CATEGORY_DATABASE[0],
    //     subcategories: CATEGORY_DATABASE[3],
    //     status: 'published',
    //     liveUrl: 'https://finafrik.co.uk/',
    // }, 
    // {
    //     id: 16,
    //     name: 'bains-33',
    //     url: '',
    //     title: 'Real-estalte conversion page design', 
    //     shortDescription: 'Design of landing page to attract and covert corporate rental offices ...',
    //     thumbnail: './../../../assets/img/3.png',
    //     createdAt: '4/06/2022',
    //     categories: CATEGORY_DATABASE[1],
    //     subcategories: CATEGORY_DATABASE[2],
    //     status: 'published',
    //     liveUrl: '',
    // }, 
    // {
    //     id: 16,
    //     name: 'canadian-congress-diversity',
    //     url: '',
    //     title: 'Non-profit corporate landing page design', 
    //     shortDescription: '...',
    //     thumbnail: './../../../assets/img/3.png',
    //     createdAt: '4/06/2022',
    //     categories: CATEGORY_DATABASE[1],
    //     subcategories: CATEGORY_DATABASE[2],
    //     status: 'published',
    //     liveUrl: '',
    // },  
    // {
    //     id: 17,
    //     name: 'moy-fung-website',
    //     url: '',
    //     title: 'Solopreneur coversion page design', 
    //     shortDescription: '...',
    //     thumbnail: './../../../assets/img/3.png',
    //     createdAt: '4/06/2022',
    //     categories: CATEGORY_DATABASE[1],
    //     subcategories: CATEGORY_DATABASE[2],
    //     status: 'published',
    //     liveUrl: '',
    // },  
    // {
    //     id: 18,
    //     name: 'comoros-government-website-proposal',
    //     url: '',
    //     title: 'Comoros Government website', 
    //     shortDescription: "Landing page design proposal for the Government of Comoros new web portal.",
    //     thumbnail: './../../../assets/img/3.png',
    //     createdAt: '4/06/2022',
    //     categories: CATEGORY_DATABASE[1],
    //     subcategories: CATEGORY_DATABASE[2],
    //     status: 'published',
    //     liveUrl: '',
    // },  
    // {
    //     id: 19,
    //     name: 'zoabiss-chicks-website',
    //     url: '',
    //     title: 'Conversion landing page design', 
    //     shortDescription: 'Design of a landing page of an African chicken broiler business.',
    //     thumbnail: './../../../assets/img/3.png',
    //     createdAt: '4/06/2022',
    //     categories: CATEGORY_DATABASE[1],
    //     subcategories: CATEGORY_DATABASE[2],
    //     status: 'published',
    //     liveUrl: '',
    // },  
    // {
    //     id: 20,
    //     name: 'scec-website',
    //     url: '',
    //     title: 'Corporate landing page design', 
    //     shortDescription: 'SCEC company website - Design of a corporate landing page for an African micro bank',
    //     thumbnail: './../../../assets/img/3.png',
    //     createdAt: '4/06/2022',
    //     categories: CATEGORY_DATABASE[1],
    //     subcategories: CATEGORY_DATABASE[2],
    //     status: 'published',
    //     liveUrl: 'https://www.scecsa.com/',
    // },  
    // {
    //     id: 21,
    //     name: 'smobilpay-website',
    //     url: '',
    //     title: 'Corporate website design', 
    //     shortDescription: '...',
    //     thumbnail: './../../../assets/img/3.png',
    //     createdAt: '4/06/2022',
    //     categories: CATEGORY_DATABASE[1],
    //     subcategories: CATEGORY_DATABASE[2],
    //     status: 'published',
    //     liveUrl: '',
    // },  
    // {
    //     id: 22,
    //     name: 'smobilpay-payment-process-portal',
    //     url: '',
    //     title: 'Smobilpay payment process', 
    //     shortDescription: '...',
    //     thumbnail: './../../../assets/img/3.png',
    //     createdAt: '4/06/2022',
    //     categories: CATEGORY_DATABASE[1],
    //     subcategories: CATEGORY_DATABASE[2],
    //     status: 'published',
    //     liveUrl: '',
    // },  
    // {
    //     id: 23,
    //     name: 'kt-house-ecommerce-website-design',
    //     url: '',
    //     title: 'KT House', 
    //     shortDescription: 'Design of an ecommerce platform for an african website',
    //     thumbnail: './../../../assets/img/3.png',
    //     createdAt: '4/06/2022',
    //     categories: CATEGORY_DATABASE[1],
    //     subcategories: CATEGORY_DATABASE[4],
    //     status: 'published',
    //     liveUrl: '',
    // },   
    // {
    //     id: 25,
    //     name: 'tcholli-ui-design',
    //     url: '',
    //     title: 'tcholli-ui-design', 
    //     shortDescription: '...',
    //     thumbnail: './../../../assets/img/3.png',
    //     createdAt: '3/20/2017',
    //     categories: CATEGORY_DATABASE[1],
    //     subcategories: CATEGORY_DATABASE[4],
    //     status: 'published',
    //     liveUrl: '',
    // },   
    // {
    //     id: 26,
    //     name: 'tcholli-ui-development',
    //     url: '',
    //     title: 'tcholli-ui-development', 
    //     shortDescription: '...',
    //     thumbnail: './../../../assets/img/3.png',
    //     createdAt: '3/20/2017',
    //     categories: CATEGORY_DATABASE[1],
    //     subcategories: CATEGORY_DATABASE[4],
    //     status: 'published',
    //     liveUrl: '',
    // },   
    // {
    //     id: 27,
    //     name: 'tcholli-usability-testing',
    //     url: '',
    //     title: 'tcholli-usability-testing', 
    //     shortDescription: '...',
    //     thumbnail: './../../../assets/img/3.png',
    //     createdAt: '3/20/2017',
    //     categories: CATEGORY_DATABASE[0],
    //     subcategories: EMPTY_CATEGORY,
    //     status: 'draft',
    //     liveUrl: '',
    // },   
    // {
    //     id: 28,
    //     name: 'richy-group-ui-design',
    //     url: '',
    //     title: 'richy-group-ui-design', 
    //     shortDescription: '...',
    //     thumbnail: './../../../assets/img/3.png',
    //     createdAt: '3/20/2017',
    //     categories: CATEGORY_DATABASE[0],
    //     subcategories: EMPTY_CATEGORY,
    //     status: 'draft',
    //     liveUrl: '',
    // },   
    // {
    //     id: 29,
    //     name: 'richy-group-ui-development',
    //     url: '',
    //     title: 'richy-group-ui-development', 
    //     shortDescription: '...',
    //     thumbnail: './../../../assets/img/3.png',
    //     createdAt: '3/20/2017',
    //     categories: CATEGORY_DATABASE[1],
    //     subcategories: CATEGORY_DATABASE[4],
    //     status: 'draft',
    //     liveUrl: '',
    // },   
    // {
    //     id: 29,
    //     name: 'herve-momo-loan-tracking-business',
    //     url: 'herve-momo-loan-tracking-busines',
    //     title: 'herve-momo-loan-tracking-business', 
    //     shortDescription: 'Design of an African mobile app that track payment installments',
    //     thumbnail: './../../../assets/img/3.png',
    //     createdAt: '3/20/2017',
    //     categories: CATEGORY_DATABASE[1],
    //     subcategories: CATEGORY_DATABASE[4],
    //     status: 'draft',
    //     liveUrl: '',
    // },  
    // {
    //     id: 29,
    //     name: 'herver-djoumbi-ui-design-for-health-trackin-AI',
    //     url: 'herver-djoumbi-ui-design-for-health-trackin-AI',
    //     title: 'herver-djoumbi-ui-design-for-health-trackin-AI', 
    //     shortDescription: 'Design of an African mobile app that track payment installments',
    //     thumbnail: './../../../assets/img/3.png',
    //     createdAt: '3/20/2017',
    //     categories: CATEGORY_DATABASE[1],
    //     subcategories: CATEGORY_DATABASE[4],
    //     status: 'draft',
    //     liveUrl: '',
    // },    
];





export const EMPTY_PROJECT: Project = {
    id: 0,
    name: '',
    url: '',
    title: '', 
    shortDescription: '',
    thumbnail: '',
    createdAt: '',
    categories: [EMPTY_CATEGORY],
    subcategories: EMPTY_CATEGORY,
    status: 'draft',
    liveUrl: '',
};