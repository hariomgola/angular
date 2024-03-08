import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCallInterceptorsService implements HttpInterceptor {
  constructor() {}
  // intercept methord
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifyRequest = req.clone({
      headers: req.headers.append('auth', 'auth-token'),
    });
    // return next.handle(req);
    return next.handle(modifyRequest).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          console.log(
            'Response Has retreived from body data : \n\n',
            event.body
          );
        }
      })
    );
  }
}
