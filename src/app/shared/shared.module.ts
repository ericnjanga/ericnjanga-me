import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from "./icon/icon.component";
import { Test1Component } from './test1/test1.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ClientLogosComponent } from './client-logos/client-logos.component';
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
import { AppbarComponent } from './appbar/appbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RevealContentComponent } from './reveal-content/reveal-content.component';
import { HighlightSectionTextImgComponent } from './highlight-section-text-img/highlight-section-text-img.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { FadeInSectionDirective } from './directives/fade-in-section.directive';

@NgModule({
  declarations: [
    IconComponent,
    Test1Component,
    CarouselComponent,
    ClientLogosComponent,
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
    AppbarComponent,
    RevealContentComponent,
    HighlightSectionTextImgComponent,
    FadeInSectionDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatTooltipModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatBottomSheetModule,
  ],
  exports: [
    IconComponent,
    CarouselComponent,
    ClientLogosComponent,
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
    AppbarComponent,
    RevealContentComponent,
    HighlightSectionTextImgComponent,
    FadeInSectionDirective,
  ]
})
export class SharedModule { }
