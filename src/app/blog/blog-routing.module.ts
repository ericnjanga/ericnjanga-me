import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Article1Component } from './article1/article1.component';
import { Article2Component } from './article2/article2.component';
import { Article3Component } from './article3/article3.component';
import { Article4Component } from './article4/article4.component';
import { Article5Component } from './article5/article5.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'grab-your-visitors-attention-with-a-captivating-banner', component: Article1Component },
    { path: 'Is-your-website-built-for-your-ideal-customers', component: Article2Component },
    { path: '6-reasons-why-your-website-loading-speed-matters', component: Article3Component },
    { path: 'why-mobile-responsiveness-is-good-for-business', component: Article4Component },
    { path: 'why-an-intuitive-experience-is-helps-a-business-grow', component: Article5Component },

    // Add a wildcard route for unmatched paths (optional)
    { path: '**', redirectTo: '/' }, 
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class BlogRoutingModule {

}
