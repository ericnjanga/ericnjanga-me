import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router
} from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {


  @Input()
  routing: boolean = false;

  @Input()
  detectRoutingOngoing = false;

  constructor(
    public loadingService: LoadingService,
    private router: Router) {

  }

  ngOnInit() {

    if (this.detectRoutingOngoing) {
      this.router.events
        .subscribe(
          // When the router starts its transition from one route to another
          event => {
            // Trun loading ON if ... 
            if (event instanceof NavigationStart          //...  a new route has been instanciated
              || event instanceof RouteConfigLoadStart    // ... the whole "projects" module is being loaded
              ) {
              this.loadingService.loadingOn();
            }
            // Trun loading OFF if ...
            else if (
              event instanceof NavigationEnd ||     // ... navigation ends successfully
              event instanceof NavigationError ||   // ... there is a problem
              event instanceof NavigationCancel ||  // ... there is a cancellation of the routing navigation
              event instanceof RouteConfigLoadEnd   // ... the whole "projects" module has finished loading
              ) {
              this.loadingService.loadingOff();

            }

          }
        );
    }
  }
}
