import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UidevelopmentComponent } from './pages/uidevelopment/uidevelopment.component';
// import { UxdesignComponent } from './pages/uxdesign/uxdesign.component';

const routes: Routes = [
  { 
    path: 'projects', 
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
    data: {
      preload: false
    }
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'ux-design', component: UxdesignComponent },
  { path: 'ui-development', component: UidevelopmentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  // Matches anything typed in the browser
  // (must always be the last route)
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
