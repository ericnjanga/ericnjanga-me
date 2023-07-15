import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CaseStudy1Component } from './case-study1/case-study1.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'transformation-and-realignment-of-a-website-with-corporate-strategy', component: CaseStudy1Component },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class CaseStudiesRoutingModule {

}