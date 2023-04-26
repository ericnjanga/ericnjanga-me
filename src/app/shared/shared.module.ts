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
import { MessagesComponent } from './messages/messages.component';
import { LoadingComponent } from './loading/loading.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



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
    HeroComponent,
    MessagesComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    IconComponent,
    CarouselComponent,
    TopClientsListComponent,
    TwoSkillsComponent,
    CallToActionComponent,
    LogoComponent,
    HeroComponent,
    MessagesComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
