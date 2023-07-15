import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Article1Component } from './article1/article1.component';
import { Article2Component } from './article2/article2.component';
import { Article3Component } from './article3/article3.component';
import { Article4Component } from './article4/article4.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '6-keys-captivate-attention-your-web-visitors-hero-section', component: Article1Component },
    { path: 'web-design-mistake-1-ignoring-your-ideal-customers', component: Article2Component },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class BlogRoutingModule {

}