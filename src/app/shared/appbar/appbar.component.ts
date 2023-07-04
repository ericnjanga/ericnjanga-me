import { Component, Input, Renderer2, ElementRef  } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Location } from '@angular/common';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],

  // Aniamtion settings
  animations: [
    trigger('collapseAnimation', [
      state('open', style({
        height: '*',
        visibility: 'visible',
      })),
      state('closed', style({
        height: '0',
        visibility: 'hidden',
        // overflow: 'hidden',
      })),
      transition('open <=> closed', animate('250ms ease-in-out')),
    ]),
  ]

})
export class AppbarComponent {
  @Input() currentRoute!: string;
  isCollapsed = true;

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

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
    // const navbarCollapse = this.elementRef.nativeElement.querySelector('.navbar-collapse');
    // this.renderer.addClass(navbarCollapse, 'show');
  }
  

  constructor(private location: Location, private renderer: Renderer2, private elementRef: ElementRef) {

  }
}
