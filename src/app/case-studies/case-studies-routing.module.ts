import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseStudy1Component } from './case-study1/case-study1.component';
// import { ProjectsCardListComponent } from './projects-card-list/projects-card-list.component';
// import { ProjectComponent } from './project/project.component';
// import { ProjectResolver } from './services/project.resolver';

const routes: Routes = [
    { path: 'transformation-and-realignment-of-a-website-with-corporate-strategy', component: CaseStudy1Component },
];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    // providers: [
    //     ProjectResolver
    // ]
})
export class CaseStudiesRoutingModule {

}