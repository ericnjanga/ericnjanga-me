import { Component, Input  } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../model/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() project: Project;

  ngOnInit() {
    // Get the payload coming from the API
    this.project = this.route.snapshot.data['project'];
    
    // Set page title
    this.titleService.setTitle(`Eric Njanga | ${this.project.intro.title}`);


    console.log(this.project);
  }

  constructor(private titleService: Title, private route: ActivatedRoute, private projectService: ProjectService) {
    this.project = this.projectService.getEmptyProject();
  }
}