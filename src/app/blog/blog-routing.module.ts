import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Article1Component } from './article1/article1.component';
import { Article2Component } from './article2/article2.component';
import { Article3Component } from './article3/article3.component';
import { Article4Component } from './article4/article4.component';
import { Article5Component } from './article5/article5.component';
import { Article6Component } from './article6/article6.component';
import { Article7Component } from './article7/article7.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'grab-your-visitors-attention-with-a-captivating-banner', component: Article1Component },
    { path: 'Is-your-website-built-for-your-ideal-customers', component: Article2Component },
    { path: '6-reasons-why-your-website-loading-speed-matters', component: Article3Component },
    { path: 'why-mobile-responsiveness-is-good-for-business', component: Article4Component },
    { path: 'why-an-intuitive-experience-helps-a-business-grow', component: Article5Component },
    { path: 'an-engaging-website-is-good-for-business-here-is-why', component: Article6Component },
    { path: 'what-engages-users-best-Stock-images-real-images-or-no-images', component: Article7Component },

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
