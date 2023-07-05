import { Component } from '@angular/core';

@Component({
  selector: 'app-case-study1',
  templateUrl: './case-study1.component.html',
  styleUrls: ['./case-study1.component.scss']
})
export class CaseStudy1Component {




  ngOnInit() {
    // Set the scroll position to 0,0 when the component is initialized. 
    window.scrollTo(0, 0);

    // Set page title
    // this.titleService.setTitle('Eric Njanga | About');
  }
}
