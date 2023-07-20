import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseStudiesRoutingModule } from './case-studies-routing.module';
import { SharedModule } from './../shared/shared.module';

import { CaseStudy1Component } from './case-study1/case-study1.component';
import { HomeComponent } from './home/home.component';
import { CaseStudyRowComponent } from './case-study-row/case-study-row.component';

@NgModule({
  declarations: [
    HomeComponent,
    CaseStudy1Component,
    CaseStudyRowComponent,
  ],
  imports: [
    CommonModule,
    CaseStudiesRoutingModule,
    SharedModule,
  ],
  exports: [
    CaseStudyRowComponent,
  ]
})
export class CaseStudiesModule { }
