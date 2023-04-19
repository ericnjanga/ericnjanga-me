import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from "./icon/icon.component";
import { Test1Component } from './test1/test1.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TopClientsListComponent } from './top-clients-list/top-clients-list.component';
import { TwoSkillsComponent } from './two-skills/two-skills.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';



@NgModule({
  declarations: [
    IconComponent,
    Test1Component,
    CarouselComponent,
    TopClientsListComponent,
    TwoSkillsComponent,
    CallToActionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    IconComponent,
    CarouselComponent,
    TopClientsListComponent,
    TwoSkillsComponent,
    CallToActionComponent
  ]
})
export class SharedModule { }
