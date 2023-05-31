import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Project, ProjImg, Links, LinkItem, Reference, Tool } from '../model/project';
import { ProjectService } from '../services/project.service';
import { subtractDates } from './../../shared/utils';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() project: Project;

  ngOnInit() {
    // Set the scroll position to 0,0 when the component is initialized. 
    window.scrollTo(0, 0);
    
    // Get the payload coming from the API
    this.project = this.route.snapshot.data['project'];
    
    // Set page title
    this.titleService.setTitle(`Eric Njanga | ${this.project.descriptions.title}`);
  }

  imgClass(img: ProjImg, prefix: string) {
    return `img-${prefix}--${img.type}`;
  }

  // ...
  projectStatusTitle(links: Links) {
    let message = '';
    if (links.live) {
      message = 'This project is live';
    } else {
      message =`This project isn't yet live`;
    }
 
    return message;
  }

  linkClass(link: LinkItem) {
    return link.icon;
  }

  // Return only links that are available
  projLinks(links: Links) {
    const projLinks = [];
  
    if (links.live) {
      projLinks.push({ name: 'Live', url: links.live, icon: 'icon-live-project' });
    }
    if (links.git) {
      projLinks.push({ name: 'Git', url: links.git, icon: 'icon-git' });
    }
    if (links.figma) {
      projLinks.push({ name: 'Figma', url: links.figma, icon: 'icon-figma-files' });
    }
    if (links.figmaJam) {
      projLinks.push({ name: 'FigJam', url: links.figmaJam, icon: 'icon-figma-jam' });
    }
    if (links.prototype) {
      projLinks.push({ name: 'Prototype', url: links.prototype, icon: 'icon-prototype' });
    }
    if (links.presentation) {
      projLinks.push({ name: 'PDF Presentation', url: links.presentation, icon: 'icon-pdf-presentation' });
    }
    if (links.devProcessVideo) {
      projLinks.push({ name: 'Dev Process Video', url: links.devProcessVideo, icon: 'icon-dev-process' });
    }
 
    return projLinks;
  }

  getDuration(projRef: Reference) {
    return subtractDates(projRef.startDate, projRef.endDate);
  }

  constructor(private titleService: Title, private route: ActivatedRoute, private projectService: ProjectService) {
    this.project = this.projectService.getEmptyProject();
  }
}