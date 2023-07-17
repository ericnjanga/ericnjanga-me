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

@NgModule({
  declarations: [
    HomeComponent,
    Article1Component,
    Article2Component,
    Article3Component,
    Article4Component,
    ArticleThumbComponent,
    ArticlesListingComponent
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
