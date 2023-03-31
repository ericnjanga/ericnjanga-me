import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsCardListComponent } from './projects-card-list/projects-card-list.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: HomeComponent },
    {
        path: ':projectUrl',
        component: ProjectComponent
    }
    // {
    //     path: ":projectUrl",
    //     component: ProjectComponent,
    //     // canActivate: [AuthGuard],
    //     // canActivateChild: [AuthGuard],
    //     // canDeactivate: [ConfirmExitGuard],
    //     children: [
    //         {
    //           path: "",
    //           component: ProjectsCardListComponent,
    //           resolve: {
    //               projects: LessonsResolver
    //           }
    //         },
    //         {
    //             path: "projects/:projectSeqNo",
    //             component: LessonDetailComponent,
    //             resolve: {
    //                 project: LessonDetailResolver
    //             }
    //         }
    //     ],
    //     resolve: {
    //         course: CourseResolver
    //     }
    // }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: [
        // CourseResolver,
        // LessonsResolver,
        // LessonDetailResolver,
        // AuthGuard,
        // ConfirmExitGuard
    ]
})
export class ProjectsRoutingModule {

}