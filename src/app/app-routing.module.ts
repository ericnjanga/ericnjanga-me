import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutDeveloperComponent } from './pages/about-developer/about-developer.component';
import { AboutUxDesignerComponent } from './pages/about-ux-designer/about-ux-designer.component';
import { AboutExcellenceComponent } from './pages/about-excellence/about-excellence.component';
import { AboutProfessionalQualitiesComponent } from './pages/about-professional-qualities/about-professional-qualities.component';
import { AboutMentorsComponent } from './pages/about-mentors/about-mentors.component';
import { AboutTestimonialsComponent } from './pages/about-testimonials/about-testimonials.component';
import { TypescaleComponent } from './pages-static/typescale/typescale.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' // if the path is an exact match
  },
  { 
    path: 'projects', 
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
    data: {
      preload: false
    }
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },


  { path: 'typescale', component: TypescaleComponent },

  /**
   * TODO: About should have it's own module
   */
  { path: 'about', component: AboutComponent },
  { path: 'about/ui-developer', component: AboutDeveloperComponent },
  { path: 'about/ux-designer', component: AboutUxDesignerComponent },
  { path: 'about/excellence', component: AboutExcellenceComponent },
  { path: 'about/professional', component: AboutProfessionalQualitiesComponent },
  { path: 'about/mentors', component: AboutMentorsComponent },
  { path: 'about/testimonials', component: AboutTestimonialsComponent },
  


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
