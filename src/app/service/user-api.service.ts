import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UserDetail } from '../shared/models/UserDetails';
import { ThrowStmt } from '@angular/compiler';
import { ArgumentOutOfRangeError, Observable } from 'rxjs';
import { AuthenticateRequest } from '../shared/models/AuthenticateRequest';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }
  // Parse specific items to modal
  specificModalUserDetail?: UserDetail;
  //
  readonly baseURL = `http://localhost:5000/api/UserDetails`;
  formData: UserDetail = new UserDetail();
  list: UserDetail[] = [];
  model!: UserDetail;

  refreshList(): void {
    this.http.get(this.baseURL)
      .toPromise()
      .then(x => {
        this.list = x as UserDetail[];
      });
  }

  getUserDetailById(id: number): Observable<UserDetail> {
    return this.http.get<UserDetail>(this.baseURL + '/' + id);
  }

  deleteUserDetail(id: number): any{
    return this.http.delete(this.baseURL + '/' + id);
  }

  postUserDetail(model: UserDetail): any{
    return this.http.post(this.baseURL, model);
  }

  updateUserDetail(id: number, model: UserDetail): any {
    return this.http.put(this.baseURL + '/' + id, model);
  }
}
