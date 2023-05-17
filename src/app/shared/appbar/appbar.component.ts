import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent {
  @Input() currentRoute!: string;

  // Navigate the user back to the previous route 
  goBack() {
    this.location.back();
  }


  isChildRouteOf(parents:string[], route:string): boolean {
    let isChild = parents.filter((p) => {
      const childRoutes = this.currentRoute.split(`/${p}/`);
      return childRoutes[0]=='' && childRoutes[1]!==undefined;
    });

    return !!isChild[0];
  }

  constructor(private location: Location) {
  }
}
