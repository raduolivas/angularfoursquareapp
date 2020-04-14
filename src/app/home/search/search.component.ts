import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventEmitter } from '@angular/core';
import {
  SEARCH_NAME_MIN_LENGTH,
  SEARCH_NAME_MAX_LENGTH,
  SEARCH_SECTIONS,
  SEARCH_GEOLOCATION_MESSAGE,
  SEARCH_GEOLOCATION_ACTION,
  SEARCH_GEOLOCATION_DEBOUNCE,
  SEARCH_GEOLOCATION_ERROR_ACTION,
  SEARCH_GEOLOCATION_ERROR,
  VENUES_MOCK
} from './search.constants';
import { Section, VenuesResponse, Venue } from '../../shared/venue/search.model';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';
import { SearchService } from './search.service';
import { GeolocationService } from 'src/app/shared/geolocation/geolocation.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output()
  public venues: EventEmitter<object> = new EventEmitter<object>();

  public searchData: FormGroup;
  public isSearchingSection: boolean = false;
  public isSearchingLocation: boolean = false;
  public geoLocation: boolean = false;
  public locationButtonColor: string = 'accent';

  public venuesResponse: Observable<VenuesResponse> = null;
  public filteredSections: Observable<Section>[];
  public sections: Section[] = SEARCH_SECTIONS;
  public locations: Observable<VenuesResponse> = null;


  constructor(
    private readonly fb: FormBuilder,
    private readonly venueService: SearchService,
    private readonly geolocation: GeolocationService,
    private readonly snackBar: MatSnackBar) {

  }

  public ngOnInit(): void {
    this.formSetup();
    this.onSubmit();
  }

  public formSetup(): void {
    this.searchData = this.fb.group({
      section:  ['',
        [
          Validators.required,
          Validators.minLength(SEARCH_NAME_MIN_LENGTH),
          Validators.maxLength(SEARCH_NAME_MAX_LENGTH)
        ]],
        radius: ['', []]
    });
  }

  public getGeolocation(): void {
    this.geolocation.getLocation().subscribe(res => {
      console.log(res);
      if (res) {
        this.geoLocation = true;
        this.locationButtonColor = 'warn';
        this.snackBar.open(
          SEARCH_GEOLOCATION_MESSAGE,
          SEARCH_GEOLOCATION_ACTION,
          { duration: SEARCH_GEOLOCATION_DEBOUNCE }
        );
      }
    });
  }

  public locationIputChangekup(ll: string): Observable<VenuesResponse> {
    this.isSearchingLocation = true;
    return this.venueService.findVenues(ll).pipe(
      map((response: VenuesResponse) => {
        this.isSearchingLocation = false;

        return response;
      }),
      catchError(() => {
        return of(null);
      })
    );
  }

  public onSubmit(findAnyWay: boolean = false): void {
    // if (!this.geoLocation && !findAnyWay) {
    //   this.snackError(SEARCH_GEOLOCATION_ERROR, SEARCH_GEOLOCATION_ERROR_ACTION);
    //   return;
    // }
    this.venues.emit({method: 'loadVenues', venues: VENUES_MOCK});
  }

  public locationIputChange(location): void {
    if (location.length >= 3) {
      console.log(location);
    }
  }

  private snackError(message: string, action: string): void {
   const snackBarkRef = this.snackBar.open(message, action,
      { duration: SEARCH_GEOLOCATION_DEBOUNCE }
    );
   snackBarkRef.onAction().subscribe(() => {
      this.onSubmit(true);
    });
  }
}
