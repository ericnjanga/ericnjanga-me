import { Component, Input  } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Project, ProjImg } from '../model/project';
import { ProjectService } from '../services/project.service';
import { Category } from '../model/category';

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
    this.titleService.setTitle(`Eric Njanga | ${this.project.descriptions.title}`);
  }

  imgClass(img: ProjImg, prefix: string) {
    return `img-${prefix}--${img.type}`;
  }

  constructor(private titleService: Title, private route: ActivatedRoute, private projectService: ProjectService) {
    this.project = this.projectService.getEmptyProject();
  }
}