import { Component, Input  } from '@angular/core';
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
    this.project = this.route.snapshot.data['project'];
  }

  constructor(private route: ActivatedRoute, private projectService: ProjectService) {
    this.project = this.projectService.getEmptyProject();
  }
}