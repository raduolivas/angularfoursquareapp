import { Component, OnInit, Input } from '@angular/core';
import { Venue } from 'src/app/shared/venue/search.model';

@Component({
  selector: 'app-venue-card',
  templateUrl: './venue-card.component.html',
  styleUrls: ['./venue-card.component.scss']
})
export class VenueCardComponent implements OnInit {
  @Input() public venue: Venue;

  constructor() { }

  public ngOnInit(): void {
  }

}
