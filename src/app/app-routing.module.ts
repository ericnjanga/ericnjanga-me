import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UidevelopmentComponent } from './pages/uidevelopment/uidevelopment.component';
import { RichyGroupComponent } from './pages-static/richy-group/richy-group.component';
// import { UxdesignComponent } from './pages/uxdesign/uxdesign.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' // if the path is an exact match
  },
  { 
    path: 'projects', 
    /**
     * LAZY LOADED MODULE
     * Child routes example:
     * - projects/uid/5 (5th project of "uid")
     * - projects/uxd/7 (7th project of "uxd")
     * - projects/all/32 (32th project all industries included)
     * - projects/32-connecting-the-dots-of-a-social-business
     * @returns 
     */
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
    data: {
      preload: false
    }
  },
  { path: 'home', component: HomeComponent },
  // { path: 'ux-design', component: UxdesignComponent },
  { path: 'ui-development', component: UidevelopmentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },


  { path: 'static-richy-group', component: RichyGroupComponent },


  // Matches anything typed in the browser
  // (must always be the last route)
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
