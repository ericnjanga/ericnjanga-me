import { Component, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() title = '';
  @Input() info = '';

  // Don't sign a specific type to the child view 
  // (it will be casted as a "nativeElement" later in the code)
  @ViewChild('myDialog', { static: true }) myDialog: any;

  // tooltip positionning ...
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[3]);
  
  // scroll system
  @ViewChild('scrollable', { static: true }) scrollable: any; // scrollable area ..
  scrollValue = 0;  // scrol counter ..

  list: number[] = [1,2,3,4,5];
 

  openDialog() {
    this.myDialog.nativeElement.showModal();
  }

  closeDialog() {
    this.myDialog.nativeElement.close();
  }

  /**
   * Make the scrollable area scroll left or right
   * @param direction 
   */
  scroll(direction: number) {
    const container = this.scrollable.nativeElement;
    const step = 200;
    const scrollAmount = container.scrollLeft + (step * direction);
    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
    this.scrollValue += step * direction;
  }
}
