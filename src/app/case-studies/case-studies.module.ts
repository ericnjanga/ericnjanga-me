import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseStudiesRoutingModule } from './case-studies-routing.module';
import { SharedModule } from './../shared/shared.module';

import { CaseStudy1Component } from './case-study1/case-study1.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    CaseStudy1Component,
  ],
  imports: [
    CommonModule,
    CaseStudiesRoutingModule,
    SharedModule,
  ]
})
export class CaseStudiesModule { }
