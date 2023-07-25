import { Input, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ArticleThumb } from './../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-carousel',
  templateUrl: './article-carousel.component.html',
  styleUrls: ['./article-carousel.component.scss']
})
export class ArticleCarouselComponent {
  @Input() current: ArticleThumb | undefined;
  article: ArticleThumb | undefined;
  total = 0;
  prevArticle: ArticleThumb | undefined;
  nextArticle: ArticleThumb | undefined;

  constructor(
    private elementRef: ElementRef,
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute // Add ActivatedRoute to the constructor
  ) {}

  ngOnInit(): void {
    this.article = this.current;
    this.loadNext();
    this.total = this.articleService.getTotalNumber();
  }

  loadPrevious() {
    const next = this.articleService.getNext(this.article);
    if (next) {
      this.article = next;
    }

    console.log('---next--', next);
  }

  loadNext() {
    const prev = this.articleService.getPrev(this.article);
    if (prev) {
      this.article = prev;
    }

    console.log('---prev--', prev);
  }

}
