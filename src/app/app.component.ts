import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router){}
  title = 'APICommunication';
  isLoaded = false;

  ngOnInit(): void {
    const loggedIn = this.authService.isLoggedIn;
    if (loggedIn === true) {
      const user = this.authService.getUser();
      if (user !== null) {
        this.isLoaded = true;
      }
    }
    else {
      this.router.navigate(['/login']);
    }
  }
}
