import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Article1Component } from './article1/article1.component';
import { Article2Component } from './article2/article2.component';
import { Article3Component } from './article3/article3.component';
import { Article4Component } from './article4/article4.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'grab-your-visitors-attention-with-a-captivating-banner', component: Article1Component },
    { path: 'Is-your-website-built-for-your-ideal-customers', component: Article2Component },
    { path: '6-reasons-why-your-website-loading-speed-matters', component: Article3Component },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class BlogRoutingModule {

}


