import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthorizationService } from './authorization.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private readonly authorizationService: AuthorizationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.statut === 401) {
                if (!this.authorizationService.isAuthorized()) {
                    this.authorizationService.redirectToAuthorization();
                }
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}
