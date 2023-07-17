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
        text: 'Back in 2013, I decided to turn my web design skills into a business. "What can go wrong?" I thought, “Everybody would love a beautiful website.” Instead of making a business plan, and getting business and sales coaching, I decided to “follow my #passion”, “because the #money will eventually come” (probably the worst advice I got from internet #influencers and #motivation Gurus).'
      },
      {
        title: '6 keys to captivate the attention of your web visitors: The hero section',
        link: '/blog/6-keys-captivate-attention-your-web-visitors-hero-section',
        img: './../../../assets/img/july2023/article-1-tmb-min.png',
        text: 'The first thing people see when they land on a website is the hero, it refers to the prominent and visually appealing section at the top of a web page. A poorly designed hero will severely damage the chance of user conversion.'
      }
    ];
  }

}
