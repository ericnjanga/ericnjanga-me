import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../model/project';
import { ProjectService } from '../services/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  uxdProjects: Project[] = [];
  devProjects: Project[] = [];
  projects: Project[] = [];
  heroImgType = 'phone';
  heroImg = './../../../assets/img/project-25-hero.png';

  ngOnInit(): void {
    // Set the scroll position to 0,0 when the component is initialized. 
    window.scrollTo(0, 0);
    
    // Set page title
    this.titleService.setTitle('Eric Njanga | Latest work');


    this.route.queryParamMap.subscribe(params => {
      const industry = params.get('industry') || '';

      // Use the industry value to construct the API request
      // (The server won't apply the filter is the param isn't valid)
      this.reloadProjects(industry);
    });

    // ...
    this.loadCounters();
  }

  // Present all projects of the industry in params
  reloadProjects(ind: string) {
    this.projectService.loadAll('published', ind).subscribe((obj) => {
      this.projects = obj.payload;
    });
  }

  loadCounters() {
    this.projectService.loadAll('published', 'ux-design').subscribe((obj) => {
      this.uxdProjects = obj.payload;
    });
    this.projectService.loadAll('published', 'ui-development').subscribe((obj) => {
      this.devProjects = obj.payload;

      console.log('..... this.devProjects = ', this.devProjects);
    });
  }

  constructor(private titleService: Title, public projectService: ProjectService, private route: ActivatedRoute) {}
}
