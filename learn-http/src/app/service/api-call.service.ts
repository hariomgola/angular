import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

const BASE_URL = 'http://localhost:3000';
/**
 GET method: retrieves information or data from a specified resource
POST method: submits data to be processed to a specified resource
PUT method: updates a specified resource with new data
DELETE method: deletes a specified resource
PATCH method: partially updates a specified resource
OPTIONS method: retrieves the supported HTTP methods of a server endpoint
HEAD method: retrieves only the headers of a response without the response body
CONNECT method: establishes a network connection to a resource, typically used for SSL/TLS tunneling
TRACE method: echoes the received request back to the client, for debugging purposes
 */
@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  /**
   ------------- Mostly Used -----------
   * GET    - Retrieves data
   * POST   - Submit data for processing
   * Put    - Update a specific data with new data
   * Delete - Delete the specific data
   * Patch  - Partially update a specific data
   ------------- Rately Used -----------
   * Option - Retrieves the supported HTTP methods of a server endpoint
   * Head   - Retrieves only the headers of a response without the response body
   * Connect- Establishes a network connection to a resource, typically used for SSL/TLS tunneling
   * Trace  - Echoes the received request back to the client, for debugging purposes
   */
  constructor(private http: HttpClient) {}

  private getUrlChange(urlAppend: string) {
    return `${BASE_URL}/${urlAppend}`;
  }

  getApiData(payload?: any) {
    // Here Simply we are using pipe to get the data on map
    // If there is any error at api end we will receive at catch error
    return this.http.get(this.getUrlChange('GET'), payload).pipe(
      map((responseData) => {
        return responseData;
      }),
      catchError((errorData) => {
        return throwError(() => errorData);
      })
    );
  }
  postApiData(payload?: any) {
    return this.http
      .post(this.getUrlChange('POST'), payload, {
        headers: new HttpHeaders({ 'custom-header': 'connect-database' }),
      })
      .pipe(
        map((responseData) => responseData),
        catchError((errorData) => throwError(() => errorData))
      );
  }
  putApiData(payload?: any) {
    return this.http.put(this.getUrlChange('PUT'), payload).pipe(
      map((responseData) => responseData),
      catchError((errorData) => throwError(() => errorData))
    );
  }
  deleteApiData(payload?: any) {
    return this.http.delete(this.getUrlChange('DELETE'), payload).pipe(
      map((responseData) => responseData),
      catchError((errorData) => throwError(() => errorData))
    );
  }
  patchApiData(payload?: any) {
    return this.http.patch(this.getUrlChange('GET'), payload).pipe(
      map((responseData) => responseData),
      catchError((errorData) => throwError(() => errorData))
    );
  }
}
