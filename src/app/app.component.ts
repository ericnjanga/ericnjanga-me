import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Eric Njanga';
  currentRoute = '';

  ngOnInit() {

    console.log('-app ngOnInit');

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('--nav end');
        this.currentRoute = event.url;
      }
    });
  }


  constructor(private router: Router) { }

}
