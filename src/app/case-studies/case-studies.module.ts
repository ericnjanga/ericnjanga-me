import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseStudy1Component } from './case-study1/case-study1.component';
import { CaseStudiesRoutingModule } from './case-studies-routing.module';



@NgModule({
  declarations: [
    CaseStudy1Component
  ],
  imports: [
    CommonModule,
    CaseStudiesRoutingModule
  ]
})
export class CaseStudiesModule { }
