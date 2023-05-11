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
import { TextTimPipe } from './pipes/text-trim/text-tim.pipe';
import { CallToActionParamsComponent } from './call-to-action-params/call-to-action-params.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TitleCaptionComponent } from './title-caption/title-caption.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { QuoteComponent } from './quote/quote.component';
import { NicePosterComponent } from './nice-poster/nice-poster.component';



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
    LoadingComponent,
    TextTimPipe,
    CallToActionParamsComponent,
    TitleCaptionComponent,
    TestimonialComponent,
    QuoteComponent,
    NicePosterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatTooltipModule,
  ],
  exports: [
    IconComponent,
    CarouselComponent,
    TopClientsListComponent,
    TwoSkillsComponent,
    CallToActionComponent,
    CallToActionParamsComponent,
    LogoComponent,
    HeroComponent,
    MessagesComponent,
    LoadingComponent,
    TextTimPipe,
    TitleCaptionComponent,
    TestimonialComponent,
    QuoteComponent,
    NicePosterComponent,
  ]
})
export class SharedModule { }
