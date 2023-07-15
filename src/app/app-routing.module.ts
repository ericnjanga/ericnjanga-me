import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' // if the path is an exact match
  },
  { path: 'home', component: HomeComponent },
  { 
    path: 'blog', 
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
    data: {
      preload: false
    }
  },
  { 
    path: 'case-studies', 
    loadChildren: () => import('./case-studies/case-studies.module').then(m => m.CaseStudiesModule),
    data: {
      preload: false
    }
  },
  // { 
  //   path: 'projects', 
  //   loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
  //   data: {
  //     preload: false
  //   }
  // },
  // { path: 'login', component: LoginComponent },
  // { path: 'typescale', component: TypescaleComponent },
  


  // Matches anything typed in the browser
  // (must always be the last route)
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 64],
      anchorScrolling: 'enabled',
      // scrollRestoration: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
