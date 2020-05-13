import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  constructor(private http: HttpClient) { }

  endpointMyPosts = 'http://127.0.0.1:8000/posts/user/?username='+ localStorage['username'];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Token ' + localStorage["token"]
    })
  };

  getMyPosts(): Observable<any> {
    return this.http.get(this.endpointMyPosts, this.httpOptions).pipe(
      map(this.extractData));
  }

  makePost(formData){
    return this.http.post('http://127.0.0.1:8000/posts/', formData);
  }
}
