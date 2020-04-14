import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { Venue } from 'src/app/shared/venue/search.model';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.scss']
})
export class VenueListComponent implements OnInit {
  public venues: Venue[] = [];

  constructor() {}

  public ngOnInit(): void {
  }

  public loadVenues(venues: Venue[]) {
    this.venues = venues;
  }

}