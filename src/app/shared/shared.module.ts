import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from "./icon/icon.component";
import { Test1Component } from './test1/test1.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TopClientsListComponent } from './top-clients-list/top-clients-list.component';



@NgModule({
  declarations: [
    IconComponent,
    Test1Component,
    CarouselComponent,
    TopClientsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconComponent,
    CarouselComponent,
    TopClientsListComponent
  ]
})
export class SharedModule { }
