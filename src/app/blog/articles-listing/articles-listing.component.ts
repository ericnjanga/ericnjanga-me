import { Component } from '@angular/core';
import { ArticleThumb } from './../models/article';

@Component({
  selector: 'app-articles-listing',
  templateUrl: './articles-listing.component.html',
  styleUrls: ['./articles-listing.component.scss']
})
export class ArticlesListingComponent {
  lisdtOfArticles: ArticleThumb[] = [];

  ngOnInit(): void {
    // [Blog]
    // This needs to go in a service
    this.lisdtOfArticles = [
      {
        title: 'Web Design Mistake #1: Ignoring your ideal customers',
        link: '/blog/web-design-mistake-1-ignoring-your-ideal-customers',
        img: './../../../assets/img/july2023/article-2-tmb-min.png',
        text: 'Your website must be built around a solid understanding of who your ideal customer is. Overlooking such an important fact almost certainly guarantees failure. In this article, I explain why by sharing a personal story of defeat, growth, and redemption.'
      },
      {
        title: '6 keys to captivate the attention of your web visitors: The hero section',
        link: '/blog/6-keys-captivate-attention-your-web-visitors-hero-section',
        img: './../../../assets/img/july2023/article-1-tmb-min.png',
        text: 'Competition is fierce, it takes about 5 seconds on average for a user to decide whether to stay on your site or leave. In this article, I’m presenting 6 keys that will captivate your visitors’ attention and give them an incentive to remain on your site a little longer.'
      }
    ];
  }
}