import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  constructor(private http: HttpClient) { }

  endpointPostsFollowed = 'http://127.0.0.1:8000/posts/followed';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getPostsFollowed(): Observable<any> {
    return this.http.get(this.endpointPostsFollowed).pipe(
      map(this.extractData));
  }


}
