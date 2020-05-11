import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SomeoneProfileService {

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  constructor(private http: HttpClient) { }

  endpointSomeonePosts = 'http://127.0.0.1:8000/posts';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getSomeonePosts(): Observable<any> {
    return this.http.get(this.endpointSomeonePosts).pipe(
      map(this.extractData));
  }

}
