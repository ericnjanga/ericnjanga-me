import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseStudy1Component } from './case-study1/case-study1.component';
// import { ProjectsCardListComponent } from './projects-card-list/projects-card-list.component';
// import { ProjectComponent } from './project/project.component';
// import { ProjectResolver } from './services/project.resolver';

const routes: Routes = [
    { path: 'transformation-and-realignment-of-a-website-with-corporate-strategy', component: CaseStudy1Component },
    // { path: '', component: HomeComponent },
    // {
    //     path: ':projectUrl',
    //     component: ProjectComponent, 
    //     /**
    //      * Resolver will only load the component if data requested is available.
    //      * (It helps prevent sooo many route-related issues|)
    //      */
    //     resolve: { // before fetching the component, first fetch the project property using ProjectResolver
    //         project: ProjectResolver
    //     }
    // }
];

// Transforming a corporate website to drive growth and align with strategy.


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