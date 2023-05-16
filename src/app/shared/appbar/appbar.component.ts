import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent {
  @Input() currentRoute!: string;

  ngOnInit() {
    // const childRoute = this.currentRoute.split('/about/');
    
    console.log('---', this.currentRoute);
    // console.log(childRoute[0]);
    // console.log(childRoute[1]);
  }

  // Navigate the user back to the previous route 
  goBack() {
    this.location.back();
  }


  isChildRouteOf(parent:string, route:string): boolean {
    const childRoute = this.currentRoute.split(`/${parent}/`);
    return childRoute[1] !== undefined;
  }

  constructor(private location: Location) {
    // this.categories = CATEGORY_DATABASE.filter(item => item.parentId === null);



    console.log('---', this.currentRoute);
  }
}
