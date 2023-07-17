import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { LoadingComponent } from './loading/loading.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';  
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { AppbarComponent } from './appbar/appbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';  
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { FadeInSectionDirective } from './directives/fade-in-section.directive';
import { BoxBookConsultationComponent } from './box-book-consultation/box-book-consultation.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    MessagesComponent,
    LoadingComponent,
    AppbarComponent,
    FadeInSectionDirective,
    BoxBookConsultationComponent,
    TestimonialComponent
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
    MessagesComponent,
    LoadingComponent,
    AppbarComponent,
    FadeInSectionDirective,
    BoxBookConsultationComponent,
    TestimonialComponent
  ]
})
export class SharedModule { }
