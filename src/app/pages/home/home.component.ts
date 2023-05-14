import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from './../../projects/model/project';
import { ProjectService } from './../../projects/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  projects: Project[] = [];

  ngOnInit(): void {
    // Set the scroll position to 0,0 when the component is initialized. 
    window.scrollTo(0, 0);

    // Set page title
    this.titleService.setTitle('Eric Njanga | Welcome');

    // Reload the list of projects
    this.reloadProjects();
  }

  // Present the latest 3 projects of any industry
  reloadProjects() {
    this.projectService.loadAll('published', 'all', 6).subscribe((obj) => {
      this.projects = obj.payload;
    });
  }

  constructor(private titleService: Title, public projectService: ProjectService) {
  }
}
