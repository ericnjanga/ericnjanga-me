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

@NgModule({
  declarations: [
    MessagesComponent,
    LoadingComponent,
    AppbarComponent,
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
    MessagesComponent,
    LoadingComponent,
    AppbarComponent,
    FadeInSectionDirective,
  ]
})
export class SharedModule { }
