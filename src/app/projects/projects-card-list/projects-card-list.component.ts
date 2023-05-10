import { Component, Input } from '@angular/core';
import { Project, Reference, ProjImg } from '../model/project';
import { fadeIn } from '../services/animations';

@Component({
  selector: 'app-projects-card-list',
  templateUrl: './projects-card-list.component.html',
  styleUrls: ['./projects-card-list.component.scss']
})
export class ProjectsCardListComponent {
  @Input() source: Project[] = [];

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
