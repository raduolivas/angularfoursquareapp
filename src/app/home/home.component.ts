import { Component, ViewChild } from '@angular/core';

import { VenueListComponent } from './venue-list/venue-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(VenueListComponent)
  private venueListComponent: VenueListComponent;

  constructor() { }

  public receiveVenues(event): void {
    const methodName = event.siblingComponentMethod;
    if (this.venueListComponent &&
        this.venueListComponent[methodName]) {
      if (event.hasOwnProperty('venues')) {
        const venues = event.venues;
        this.venueListComponent[methodName](venues.venues);
      } else {
        this.venueListComponent[methodName]();
      }
    }
  }
}
