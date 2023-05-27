import { Component, Input, ViewChild } from '@angular/core';
import { Project, Reference, ProjImg } from '../model/project';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { fadeIn } from '../services/animations';
import { Category } from '../model/category';

@Component({
  selector: 'app-projects-card-list',
  templateUrl: './projects-card-list.component.html',
  styleUrls: ['./projects-card-list.component.scss']
})
export class ProjectsCardListComponent {
  @Input() title = '';
  @Input() titleIcon = '';
  @Input() info = '';
  @Input() source: Project[] = [];

  // ...
  titleClass() {
    return this.titleIcon;
  }

  // tooltip positionning ...
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[3]);

  
  // scroll system
  @ViewChild('scrollable', { static: true }) scrollable: any; // scrollable area ..
  scrollValue = 0;  // scrol counter ..

  /**
   * Make the scrollable area scroll left or right
   * @param direction 
   */
  scroll(direction: number) {
    const container = this.scrollable.nativeElement;
    const step = 373;
    const scrollAmount = container.scrollLeft + (step * direction);
    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
    this.scrollValue += step * direction;
  }
}
