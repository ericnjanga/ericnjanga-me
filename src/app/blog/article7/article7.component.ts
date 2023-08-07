import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleThumb } from './../models/article';
import { ArticleService } from '../services/article.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article7',
  templateUrl: './article7.component.html',
  styleUrls: ['./article7.component.scss']
})
export class Article7Component {
  article: ArticleThumb | undefined;

  constructor(
    private titleService: Title,
    private elementRef: ElementRef,
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute // Add ActivatedRoute to the constructor
  ) {}

  ngOnInit(): void {
    // Get the URL segments from the current route
    this.activatedRoute.url.subscribe(urlSegments => {
      const linkToFind = '/blog/' + urlSegments.join('/'); // Combine the URL segments to form the link
      this.article = this.articleService.getArticleByLink(linkToFind);

      // Handle the scenario where the article is not found
      if (!this.article) {
        // You can redirect to a not-found page or display a message
        // For now, let's console log an error message
        console.error('Article not found:', linkToFind);
      }
    });

    // Set page title
    this.titleService.setTitle(`Eric Njanga | ${this.article?.title}`);
  }

  // This should be in a service
  scrollToSection(): void {
    const section = this.elementRef.nativeElement.querySelector('#section-article');
    section.scrollIntoView({ behavior: 'smooth' });
  }

}
