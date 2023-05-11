import { Component, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @ViewChild('myDialog', { static: true }) myDialog: any;

  list: number[] = [1,2,3,4,5];
 

  // constructor() { 
  //   this.myDialog = new HTMLDialogElement();
  // }

  openDialog() {
    this.myDialog.nativeElement.showModal();
  }

  closeDialog() {
    this.myDialog.nativeElement.close();
  }
}
