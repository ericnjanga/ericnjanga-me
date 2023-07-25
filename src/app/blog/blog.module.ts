import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from './../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { Article1Component } from './article1/article1.component';
import { Article2Component } from './article2/article2.component';
import { Article3Component } from './article3/article3.component';
import { Article4Component } from './article4/article4.component';
import { ArticleThumbComponent } from './article-thumb/article-thumb.component';
import { ArticlesListingComponent } from './articles-listing/articles-listing.component';
import { Article5Component } from './article5/article5.component';
import { Article6Component } from './article6/article6.component';
import { Article7Component } from './article7/article7.component';
import { Article8Component } from './article8/article8.component';
import { Article9Component } from './article9/article9.component';
import { Article10Component } from './article10/article10.component';
import { ArticleCarouselComponent } from './article-carousel/article-carousel.component';

@NgModule({
  declarations: [
    HomeComponent,
    Article1Component,
    Article2Component,
    Article3Component,
    Article4Component,
    ArticleThumbComponent,
    ArticlesListingComponent,
    Article5Component,
    Article6Component,
    Article7Component,
    Article8Component,
    Article9Component,
    Article10Component,
    ArticleCarouselComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ],
  exports: [
    ArticleThumbComponent,
    ArticlesListingComponent
  ]
})
export class BlogModule { }
