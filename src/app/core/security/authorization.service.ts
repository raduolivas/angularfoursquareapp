import { Injectable, NgZone } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AUTHORIZATION_TOKEN_URL, AUTHORIZATION_URI } from './authorization.constants';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(
    private readonly route: Router,
    private readonly activateRout: ActivatedRoute,
    private readonly httpClient: HttpClient) { }

    public authorize(): void {

    const authCode = this.activateRout.snapshot.queryParamMap.get('code');
    if (authCode) {
      console.log('URL IS FINE:: ', AUTHORIZATION_TOKEN_URL);
      const httpParams = new HttpParams()
        .set('code', authCode);

      this.httpClient.get(AUTHORIZATION_TOKEN_URL, {params: httpParams})
        .subscribe((res: any) => {
          if (res && res.access_token) {
            localStorage.setItem('foursquare_token', res.access_token);
          } else {
            this.redirectToAuthorization();

          }
        });
    } else {
      this.redirectToAuthorization();
    }
  }

  public redirectToAuthorization(): void {
    window.location.href = AUTHORIZATION_URI;
  }

  public isAuthorized(): boolean {
    return localStorage.getItem('foursquare_token') ? true : false;
  }

  public getAuthorizationToken(): void {}

  public setAuthorizationToken(): void{}
}
