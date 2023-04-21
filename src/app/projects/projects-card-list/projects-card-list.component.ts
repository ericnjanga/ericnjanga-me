import { Component, Input } from '@angular/core';
import { Project } from '../model/project';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects-card-list',
  templateUrl: './projects-card-list.component.html',
  styleUrls: ['./projects-card-list.component.scss']
})
export class ProjectsCardListComponent {
  // @Input() source: Project[] = [];
  @Input() source$: Observable<Project[]> | undefined;

  projectUrl(elt: Project): string {
    return `/projects/${elt.pageUrl}`;
  }
}
