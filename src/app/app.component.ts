import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { fader } from './route-animations';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
})
export class AppComponent {
  title = 'Eric Njanga';
  currentRoute = '';

  constructor(private router: Router, private meta: Meta) {  
    this.meta.addTag({ property: 'og:image', content: './../../../assets/img/july2023/Social media preview.jpg' });
    this.meta.addTag({ name: 'twitter:image', content: './../../../assets/img/july2023/Social media preview.jpg' });
  }


  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
