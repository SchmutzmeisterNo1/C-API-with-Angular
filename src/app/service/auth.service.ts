import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { first, tap } from 'rxjs/operators';
import { AuthenticateRequest } from '../shared/models/AuthenticateRequest';
import { UserDetail } from '../shared/models/UserDetails';
import { UserApiService } from './user-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public model?: UserDetail;
  constructor(private http: HttpClient, private router: Router, private userService: UserApiService) {
   }

  async login(test: AuthenticateRequest): Promise<void> {
    await this.http.post<{token: string, id: number}>(`http://localhost:5000/api/Auth/authenticate`, test)
    .pipe(tap(res => {
      const token = localStorage.setItem('token', JSON.stringify(res.token));
      const id = localStorage.setItem('id', res.id.toString());
      if (token !== null && id !== null){
        this.router.navigate(['/']);
      }
    })).toPromise();
  }

  getUser(): void {
    if (this.isLoggedIn){
      const idStr = localStorage.getItem('id');
      const id = Number(idStr);
      console.log(id);
      if (id !== null) {
        const test = this.userService.getUserDetailById(id).toPromise()
          .then(r => {
            this.model = r;
            console.log(this.model);
          });
        }
      }
    else {
    }
  }

  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('token');
    return (authToken !== null) ? true : false;
  }

  doLogout(): void{
    const removeToken = localStorage.removeItem('token');
    if (removeToken !== null) {
      this.router.navigate(['/login']);
    }
  }
}
