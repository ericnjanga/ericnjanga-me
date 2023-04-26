import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { ProjectsCardListComponent } from './projects-card-list/projects-card-list.component';
import { ProjectComponent } from './project/project.component';
import { ProjectResolver } from './services/project.resolver';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: ':projectUrl',
        component: ProjectComponent, 
        /**
         * Resolver will only load the component if data requested is available.
         * (It helps prevent sooo many route-related issues|)
         */
        resolve: { // before fetching the component, first fetch the project property using ProjectResolver
            project: ProjectResolver
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: [
        ProjectResolver
    ]
})
export class ProjectsRoutingModule {

}