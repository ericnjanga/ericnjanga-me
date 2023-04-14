import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatMenuModule } from '@angular/material/menu';



// Additional packages
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './projects/services/in-memory-data/in-memory-data.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { UxdesignComponent } from './pages/uxdesign/uxdesign.component';
import { UidevelopmentComponent } from './pages/uidevelopment/uidevelopment.component';
import { AppbarComponent } from './parts/appbar/appbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './parts/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { RichyGroupComponent } from './pages-static/richy-group/richy-group.component';

@NgModule({
  declarations: [
    AppComponent,
    // UxdesignComponent,
    UidevelopmentComponent,
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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
