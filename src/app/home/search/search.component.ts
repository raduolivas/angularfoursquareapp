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
  SEARCH_GEOLOCATION_ERROR,
  SEARCH_GEOLOCATION_NO_RESULTS
} from './search.constants';
import { Section, VenuesResponse } from '../../shared/venue/search.model';
import { Observable, of } from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import { SearchService } from './search.service';
import { GeolocationService } from 'src/app/shared/geolocation/geolocation.service';
import { AuthService } from 'src/app/core/security/auth.service';
import { AuthorizationService } from 'src/app/core/security/authorization.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  /**
   * Output data for Sibling component comunication
   */
  @Output()
  public venues: EventEmitter<object> = new EventEmitter<object>();

  public searchData: FormGroup;
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
    private readonly snackBar: MatSnackBar,
    private readonly auth0: AuthService,
    private readonly authorizationService: AuthorizationService) {

  }

  public ngOnInit(): void {

    if (!this.authorizationService.isAuthorized()) {
     this.authorizationService.authorize();
    }

    this.formSetup();
  }

  public formSetup(): void {
    this.searchData = this.fb.group({
      section:  ['',
        [
          Validators.required,
          Validators.minLength(SEARCH_NAME_MIN_LENGTH),
          Validators.maxLength(SEARCH_NAME_MAX_LENGTH)
        ]],
        radius: ['', []],
        ll: ['', []]
    });
  }

  public getGeolocation(): void {
    this.geolocation.getLocation().subscribe(res => {
      const lat = res.coords.latitude || '';
      const long = res.coords.longitude || '';
      this.searchData.controls.ll.setValue(`${lat.toFixed(4)},${long.toFixed(4)}`);
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

  public findVenues(): Observable<VenuesResponse> {
    if (!this.searchData.controls.section.value) {
      return;
    }

    const payload = this.createPayload();
    return this.venueService.findVenues(payload).pipe(
      map((response: VenuesResponse) => {
        if (!response.response.venues.length) {
          this.snackBar.open(
            SEARCH_GEOLOCATION_NO_RESULTS,
            SEARCH_GEOLOCATION_ACTION,
          { duration: SEARCH_GEOLOCATION_DEBOUNCE });
        }
        return response || [];
      }),
      catchError(() => {
        return of(null);
      })
    );
  }

  public onSubmit(): void {

    /**
     * The Auth0 was implemented but it`s not needed in
     * the way foursquare authentication works.
     * For that reason i decide to not enamble Auth0
     * parallel user authentication. But that is working.
     */

    // if (!this.auth0.loggedIn) {
    //   this.auth0.login();
    //   return;
    // }

    if (!this.geoLocation) {
      this.snackError(SEARCH_GEOLOCATION_ERROR);
      return;
    }

    this.findVenues().subscribe(res => {
      const loadedVenues = res ? res.response : [];
      this.venues.emit({siblingComponentMethod: 'loadVenues', venues: loadedVenues});
    });
  }

  private createPayload(): object {
    return {
      ll: this.searchData.controls.ll.value,
      intent: 'checkin',
      radius: this.searchData.controls.radius.value,
      query: this.searchData.controls.section.value
    };
  }

  /**
   *
   * @param message message coming from search actions
   *
   */
  private snackError(message: string): void {
   this.snackBar.open(message, 'ok',
      { duration: SEARCH_GEOLOCATION_DEBOUNCE }
    );
  }
}
