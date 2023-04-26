import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatMenuModule } from '@angular/material/menu';



// Additional packages
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './projects/services/in-memory-data/in-memory-data.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppbarComponent } from './parts/appbar/appbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './parts/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { ProjectsModule } from './projects/projects.module';
import { RichyGroupComponent } from './pages-static/richy-group/richy-group.component';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    PageNotFoundComponent,
    RichyGroupComponent,
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
