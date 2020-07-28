import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit, AfterViewInit {

  constructor(private authService: AuthService, private router: Router) {
    this.logout();
  }

  ngOnInit(): void {
    this.logout();
  }

  ngAfterViewInit() : void {
    // this.logout();
  }

  public logout() {
    if (!this.authService.isLoggedIn) { this.router.navigate(['/']); return; }

    this.authService.SignOut().then(() => {
      this.router.navigate(['/']);
      return;
    });
  }
}
