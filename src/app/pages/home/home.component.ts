import { Component } from '@angular/core';
import { Project } from './../../projects/model/project';
import { ProjectService } from './../../projects/services/project.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  projects$: Observable<Project[]> | undefined;

  ngOnInit(): void {
    this.reloadProjects();
  }

  reloadProjects() {
    this.projects$ = this.projectService.loadAll();
  }

  constructor(public projectService: ProjectService) {
  }
}
