import { Component, Input } from '@angular/core';
import { Project, Reference, ProjImg } from '../model/project';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project!: Project;
  titleMaxLength = 40;

  // tooltip positionning ...
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);



  projectUrl(elt: Project): string {
    return `/projects/${elt.pageUrl}`;
  }

  trackByFn(index: number, item: Project) {
    return item.id;
  }


  getEndDate(ref: Reference): Date {
    // Convert the string 'YYYY-MM' into a date
    const dateString = ref.endDate;
    const dateParts = dateString.split('-');
    const year = parseInt(dateParts[1], 10);
    const month = parseInt(dateParts[0], 10) - 1; // Months are zero-indexed in JavaScript
    const date = new Date(year, month);

    // and retun it
    return date;
  }

  imgClass(img: ProjImg, prefix: string) {
    return `img-${prefix}--${img.type}`;
  }

  getHeroImg(item: ProjImg): string {
    return item.hero;
  }
  getThumbnailClass(item: ProjImg): string {
    return `thumbnail--${item.type}`;
  }
}
