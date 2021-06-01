import { getLocaleTimeFormat } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {PaymentDetail} from '../shared/components/models/PaymentDetail';

@Injectable({
  providedIn: 'root'
})
export class PaymentAPIService {

  payment: PaymentDetail[] = [];

  constructor(private http: HttpClient) { }

  readonly baseURL = `http://localhost:61236/api/PaymentDetail`;
  formData: PaymentDetail = new PaymentDetail();
  list: PaymentDetail[] = [];

  refreshList(): void {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => {
        this.list = res as PaymentDetail[];
      });
  }
}
