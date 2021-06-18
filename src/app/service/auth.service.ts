import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthenticateRequest } from '../shared/models/AuthenticateRequest';
import { UserDetail } from '../shared/models/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  async login(test: AuthenticateRequest): Promise<void> {
    console.log(test);
    await this.http.post<{token: string, id: number}>(`http://localhost:5000/api/Auth/authenticate`, test)
    .pipe(tap(res => {
      localStorage.setItem('token', JSON.stringify(res.token));
      localStorage.setItem('id', res.id.toString());
      console.log(res.id);
      console.log(res.token);
    })).toPromise();
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
