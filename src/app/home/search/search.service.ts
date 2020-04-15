// &ll=40.7099,-73.9622&intent=checkin&radius=200&query=peter luger steakhouse

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { VenuesResponse } from '../../shared/venue/search.model';
import { Observable } from 'rxjs';
import {
    SEARCH_CLIENT_ID,
    SEARCH_CLIENT_SECRET,
    SEARCH_API_V,
    SEARCH_API_VENUES
} from './search.constants';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    constructor( private readonly httpClient: HttpClient ) { }

    public findVenues(params): Observable<VenuesResponse>{
        let httpParams: HttpParams = this.setCredentialParams()
            .set('v', SEARCH_API_V)
            .set('ll', params.ll)
            .set('query', params.query)
            .set('intent', params.intent);

        if (params.radius > 0) {
            httpParams = httpParams.set('radius', params.radius);
        }

        return this.httpClient.get<VenuesResponse>(SEARCH_API_VENUES,
            {params: httpParams});
    }

    private setCredentialParams(): HttpParams {
        return new HttpParams()
            .set('client_id', SEARCH_CLIENT_ID)
            .set('client_secret', SEARCH_CLIENT_SECRET);
    }
}
