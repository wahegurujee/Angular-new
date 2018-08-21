import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class HttpClientInterceptorService implements HttpInterceptor {
    constructor(private router: Router) { }

    private invalidateSession() {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currObj = this;
        const started = Date.now();
        return next.handle(req).do(event => {
            if (event instanceof HttpResponse) {
                const elapsed = Date.now() - started;
                console.log('Request for "' + req.urlWithParams + '" took: ' + elapsed + ' ms');
            }
        }, err => {
            if (err instanceof HttpErrorResponse) {
                switch (err.status) {
                    case 401:
                        // HTTP Error 401 Unauthorized
                        currObj.invalidateSession();
                        currObj.router.navigate(['/login']);
                        return Observable.throw('401 error');
                    case 403:
                        // HTTP status 403 Forbidden
                        currObj.invalidateSession();
                        currObj.router.navigate(['/login']);
                        return Observable.throw('403 error');
                    case 404:
                        // HTTP status 404 Not Found
                        return Observable.throw('404 error');
                    case 500:
                        // HTTP status 500 Internal Server Error
                        return Observable.throw('500 error');
                    default:
                        return Observable.throw(err);
                }
            }
        });

    }
}
