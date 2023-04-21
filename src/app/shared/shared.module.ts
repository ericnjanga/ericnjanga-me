import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from "./icon/icon.component";
import { Test1Component } from './test1/test1.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TopClientsListComponent } from './top-clients-list/top-clients-list.component';
import { TwoSkillsComponent } from './two-skills/two-skills.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { LogoComponent } from './logo/logo.component';
import { BoxPresentationComponent } from './box-presentation/box-presentation.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [
    IconComponent,
    Test1Component,
    CarouselComponent,
    TopClientsListComponent,
    TwoSkillsComponent,
    CallToActionComponent,
    LogoComponent,
    BoxPresentationComponent,
    HeroComponent
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
    CallToActionComponent,
    LogoComponent,
    HeroComponent
  ]
})
export class SharedModule { }
