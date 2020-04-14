import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { VenueListComponent } from './venue-list/venue-list.component';
import { Venue } from '../shared/venue/search.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(VenueListComponent)
  private venueListComponent: VenueListComponent;

  constructor() { }

  ngOnInit(): void {
  }

  public receiveVenues(event: any): void {
    const methodName = event.method;
    if (this.venueListComponent &&
        this.venueListComponent[methodName]) {
      if (event.hasOwnProperty('venues')) {
        const venues = event.venues;
        this.venueListComponent[methodName](venues);
      } else {
        this.venueListComponent[methodName]();
      }
    }
  }
}
