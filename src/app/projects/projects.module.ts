import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { ProjectsCardListComponent } from './projects-card-list/projects-card-list.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    HomeComponent,
    ProjectComponent,
    ProjectsCardListComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
  ],
  exports: [
    ProjectsCardListComponent,
  ],
  providers: []
})
export class ProjectsModule { }
