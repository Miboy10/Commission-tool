import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.authService.isLoggedIn);
    if (this.authService.isLoggedIn) this.router.navigate(['/']);
    else {
      this.authService.CheckRedirect().catch(() => {
        console.log("im here");
        this.authService.GoogleAuthRedirect();
      });
    }
  }

}
