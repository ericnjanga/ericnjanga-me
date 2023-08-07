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
import { Article11Component } from './article11/article11.component';
import { Article12Component } from './article12/article12.component';
import { Article13Component } from './article13/article13.component';
import { Article14Component } from './article14/article14.component';
import { Article15Component } from './article15/article15.component';
import { Article16Component } from './article16/article16.component';
import { Article17Component } from './article17/article17.component';
import { Article18Component } from './article18/article18.component';
import { Article19Component } from './article19/article19.component';
import { Article20Component } from './article20/article20.component';

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
    ArticleCarouselComponent,
    Article11Component,
    Article12Component,
    Article13Component,
    Article14Component,
    Article15Component,
    Article16Component,
    Article17Component,
    Article18Component,
    Article19Component,
    Article20Component
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
