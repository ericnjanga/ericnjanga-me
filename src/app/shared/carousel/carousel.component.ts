import { Component, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  // Don't sign a specific type to the child view 
  // (it will be casted as a "nativeElement" later in the code)
  @ViewChild('myDialog', { static: true }) myDialog: any;

  list: number[] = [1,2,3,4,5];
 

  openDialog() {
    this.myDialog.nativeElement.showModal();
  }

  closeDialog() {
    this.myDialog.nativeElement.close();
  }
}
