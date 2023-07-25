import { Component, Input } from '@angular/core';
import { ArticleThumb } from './../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articles-listing',
  templateUrl: './articles-listing.component.html',
  styleUrls: ['./articles-listing.component.scss']
})
export class ArticlesListingComponent {
  lisdtOfArticles: ArticleThumb[] = [];
  @Input() displayFirstThree = false;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    // [Blog]
    this.lisdtOfArticles = this.articleService.getArticles();
  }
}