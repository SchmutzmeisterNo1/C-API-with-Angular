import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UserApiService } from 'src/app/service/user-api.service';
import { UserDetail } from '../../models/UserDetails';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model!: UserDetail;
  constructor(public authService: AuthService, public userService: UserApiService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): any {
    const loggendIn = this.authService.loggedIn;
    if (loggendIn){
      const idStr = localStorage.getItem('id');
      const id = Number(idStr);
      if (id !== null) {
        const userDetails = this.userService.getUserDetailById(id);
        this.model.firstName = userDetails.firstName;
      }
    }
    else {

    }
  }
}
