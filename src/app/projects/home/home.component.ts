import { Component } from '@angular/core';
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

  projects: Project[] = [];

  ngOnInit(): void {
    // Set page title
    this.titleService.setTitle('Eric Njanga | Latest work');


    this.route.queryParamMap.subscribe(params => {
      const industry = params.get('industry') || '';

      // Use the industry value to construct the API request
      // (The server won't apply the filter is the param isn't valid)
      this.reloadProjects(industry);
    });
  }

  // Present all projects of the industry in params
  reloadProjects(ind: string) {
    this.projectService.loadAll('published', ind).subscribe((obj) => {
      this.projects = obj.payload;
    });
  }

  constructor(private titleService: Title, public projectService: ProjectService, private route: ActivatedRoute) {}
}
