import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleListService {

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  constructor(private http: HttpClient) { }
 
  endpointUsers = 'http://127.0.0.1:8000/users/';
  endpointFollowers = 'http://127.0.0.1:8000/followers/';
  endpointFollowed = 'http://127.0.0.1:8000/followed/';
  endpointLikes = 'http://127.0.0.1:8000/likes/';
  endpointFollow = 'http://127.0.0.1:8000/followed/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Authorization": 'Token ' + localStorage['token']
    })
  };

  follow(id): Observable<any>{
    var formData = {
      "followed": id
    }
    return this.http.post(this.endpointFollow, formData, this.httpOptions);
  }

  getUsers(): Observable<any> {
    return this.http.get(this.endpointUsers, this.httpOptions).pipe(
      map(this.extractData));
  }

  getFollowers(): Observable<any> {
    return this.http.get(this.endpointFollowers, this.httpOptions).pipe(
      map(this.extractData));
  }

  getFollowed(): Observable<any> {
    return this.http.get(this.endpointFollowed, this.httpOptions).pipe(
      map(this.extractData));
  }

  getLikes(): Observable<any> {
    return this.http.get(this.endpointLikes, this.httpOptions).pipe(
      map(this.extractData));
  }
}
