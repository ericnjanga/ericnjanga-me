import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  ngOnInit() {
    // Set page title
    this.titleService.setTitle('Eric Njanga | About');
  }
  

  constructor(private titleService: Title) {

  }
}
