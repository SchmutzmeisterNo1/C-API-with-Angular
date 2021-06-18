import { Component, Input, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserDetail } from 'src/app/shared/models/UserDetails';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { tap, map, concatMap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthenticateRequest } from 'src/app/shared/models/AuthenticateRequest';
import { UserApiService } from 'src/app/service/user-api.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() emailInput!: string;
  @Input() passwordInput!: string;
  invalidLogin!: boolean;
  userDetail!: UserDetail;
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  async post(): Promise<void> {
    const model = new AuthenticateRequest();
    model.Email = this.emailInput;
    model.Password = this.passwordInput;
    await this.authService.login(model);
  }
}
