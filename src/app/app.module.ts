import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatMenuModule } from '@angular/material/menu';



// Additional packages
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './projects/services/in-memory-data/in-memory-data.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './parts/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { ProjectsModule } from './projects/projects.module';
import { AboutDeveloperComponent } from './pages/about-developer/about-developer.component';
import { AboutUxDesignerComponent } from './pages/about-ux-designer/about-ux-designer.component';
import { AboutExcellenceComponent } from './pages/about-excellence/about-excellence.component';
import { AboutProfessionalQualitiesComponent } from './pages/about-professional-qualities/about-professional-qualities.component';
import { AboutMentorsComponent } from './pages/about-mentors/about-mentors.component';
import { AboutTestimonialsComponent } from './pages/about-testimonials/about-testimonials.component';
import { TypescaleComponent } from './pages-static/typescale/typescale.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    PageNotFoundComponent,
    AboutDeveloperComponent,
    AboutUxDesignerComponent,
    AboutExcellenceComponent,
    AboutProfessionalQualitiesComponent,
    AboutMentorsComponent,
    AboutTestimonialsComponent,
    TypescaleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    SharedModule,
    ProjectsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
