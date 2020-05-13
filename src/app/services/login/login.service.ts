import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(formData){
    return this.http.post('http://127.0.0.1:8000/api-auth/', formData);
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
