import { Injectable } from '@angular/core';
import { ArticleThumb } from './../models/article'; // Import the ArticleThumb interface
import { lisdtOfArticles } from './mock-articles'; // Import the lisdtOfArticles from the mock-articles file

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    constructor() { }

    getArticles(): ArticleThumb[] {
        return lisdtOfArticles;
    }

    getArticleByLink(link: string): ArticleThumb | undefined {
        return lisdtOfArticles.find(article => article.link === link);
    }

    getNext(article: ArticleThumb | undefined): ArticleThumb {
        if (!article) {
            return lisdtOfArticles[0]; // Return the first article if article is undefined
        }

        const currentIndex = lisdtOfArticles.indexOf(article);
        const nextIndex = (currentIndex + 1) % lisdtOfArticles.length;
        return lisdtOfArticles[nextIndex];
    }

    getPrev(article: ArticleThumb | undefined): ArticleThumb {
        if (!article) {
            return lisdtOfArticles[lisdtOfArticles.length - 1]; // Return the last article if article is undefined
        }

        const currentIndex = lisdtOfArticles.indexOf(article);
        const prevIndex = (currentIndex - 1 + lisdtOfArticles.length) % lisdtOfArticles.length;
        return lisdtOfArticles[prevIndex];
    }

    getTotalNumber() {
        return lisdtOfArticles.length;
    }
}