import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic foursquare auth token
        const authToken = localStorage.getItem('foursquare_token');
        if (authToken) {
            /**
             * This was supposed to work with images but
             * I couldn't find it in time, so i leave as WIP
             * The free Api does not accept Authorization on top
             * of Request Headers spec.
             */

            // request = request.clone({
            //     setHeaders: {
            //         Authorization: `Bearer ${authToken}`
            //     }
            // });
        }

        return next.handle(request);
    }
}
