import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
    // Set page title
    this.titleService.setTitle('Eric Njanga | Welcome');

    // ...
    this.reloadProjects();
  }

  reloadProjects() {
    this.projects$ = this.projectService.loadAll(3);
  }

  constructor(private titleService: Title, public projectService: ProjectService) {
  }
}
