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
        title: '6 reasons why your website loading speed matters',
        link: '/blog/6-reasons-why-your-website-loading-speed-matters',
        img: './../../../assets/img/july2023/article-3-tmb-min.png',
        text: 'Online visitors have no time to waste, a website that takes more than 2 seconds to load is probably missing out.'
      },
      {
        title: 'Is your website built for your ideal customers?',
        link: '/blog/Is-your-website-built-for-your-ideal-customers',
        img: './../../../assets/img/july2023/article-2-tmb-min.png',
        text: 'Building your website around a solid knowledge of your ideal customers is a blessing for your business.'
      },
      {
        title: 'Grab your visitors\' attention with a captivating banner',
        link: '/blog/grab-your-visitors-attention-with-a-captivating-banner',
        img: './../../../assets/img/july2023/article-1-tmb-min.png',
        text: 'A website banner is the first thing visitors see. Visitors\' decision to stay may depend on its attractiveness.'
      }
    ];
  }
}