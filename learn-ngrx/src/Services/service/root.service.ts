import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RootService {
  private baseUrl = 'https://hari.com';
  constructor(private _httpClient: HttpClient) {}

  // Get User Data call
  getApiCall(handler: string, payload?: any) {
    return this._httpClient.get(`${this.baseUrl}/${handler} `, payload).pipe(
      map((responseData) => {
        return responseData;
      }),
      catchError((errorData) => {
        return throwError(() => errorData);
      })
    );
  }
}
