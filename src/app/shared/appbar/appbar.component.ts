import { Component, OnInit , HostBinding, Renderer2, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';
import { Location } from '@angular/common';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],

  // Animation settings
  animations: [
    trigger('collapseAnimation', [
      state('open', style({
        height: '*',
        visibility: 'visible',
      })),
      state('closed', style({
        height: '0',
        visibility: 'hidden',
        overflow: 'hidden',
      })),
      transition('open <=> closed', animate('250ms ease-in-out')),
    ]),
  ],

})
export class AppbarComponent {
  darkMode = false;
  isCollapsed = true;
  @HostBinding('class.show') isExpanded = false;

  constructor(private location: Location, private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit() {
    this.detectColorScheme();
  }

  detectColorScheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      console.log('...dark')
      this.darkMode = true;
    }
  }

  toggleColorScheme() {
    this.darkMode = !this.darkMode;
    console.log('...dark = ', this.darkMode);
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
    this.isExpanded = !this.isCollapsed; // Add this line to properly set isExpanded
  }

  onAnimationDone(event: AnimationEvent) {
    if (event.toState === 'open') {
      this.isExpanded = true;
    } else {
      this.isExpanded = false;
    }
  }
}
