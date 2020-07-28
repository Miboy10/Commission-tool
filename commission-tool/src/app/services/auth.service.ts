import {EventEmitter, Injectable, NgZone, Output} from '@angular/core';
import {auth} from 'firebase/app';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Router} from "@angular/router";
import * as firebase from 'firebase';

export interface IAuthService {
  SignIn(email, password): Promise<void>;
  SignUp(email, password): Promise<void>;
  SendVerificationMail(): Promise<void>;
  ForgotPassword(passwordResetEmail): Promise<void>;
  GoogleAuth(): Promise<void>;
  AuthLogin(provider): Promise<void>;
  SetUserData(user): Promise<void>;
  SignOut(): Promise<void>;
  getEmitter(): EventEmitter<any>;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {
  userData: any;

  @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>();

  constructor( public afs: AngularFirestore, public afAuth: AngularFireAuth, public router: Router, public ngZone: NgZone) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/']);
        });

        this.SetUserData(result.user).then((response) => {
          this.fireIsLoggedIn.emit('login');
        }).catch((response) => {
          window.alert(response.message);
        });
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Send email verfificaiton when new user sign up
  async SendVerificationMail() {
    return (await this.afAuth.currentUser).sendEmailVerification()
      .then(() => {
        // this.router.navigate(['verify-email']);
      })
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified) ? true : false;
  }

  get user() {
    return JSON.parse(localStorage.getItem('user'));
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider);
  }

  GoogleAuthRedirect() {
    return this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider);
  }

  CheckRedirect() : Promise<void> {
    return new Promise((res, rej) => {
      firebase.auth().getRedirectResult().then((result) => {
        if (result.user == null) { rej(); return; }
  
        this.SetUserData(result.user).then((response) => {
          this.fireIsLoggedIn.emit('login');
          res();
        });
      });
    }) 
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          // this.router.navigate(['/project']);
        });
        this.SetUserData(result.user).then((response) => {
          this.fireIsLoggedIn.emit('login');
        });
      }).catch((error) => {
        window.alert(error)
      })
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };

    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.fireIsLoggedIn.emit('signout')
    })
  }

  getEmitter() {
    return this.fireIsLoggedIn;
  }
}