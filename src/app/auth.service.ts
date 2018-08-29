import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { AppUser } from "./models/app.user";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/of";
import { UserService } from "./user.service";

@Injectable()

export class AuthService {
  // define an observable of firebse user
  user$: Observable<firebase.User>;

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
  }

  // OK to new, becuase we are unit testing the service, and not the component
  login() {
    // store the returnURL in local storage before we authenticate the user
    const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || "/";
    localStorage.setItem("returnUrl", returnUrl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  // observable that returns the app user object, and not the firebase one lmao
  // when we use switchMap, we map an observable to another observable
  get appUser$(): Observable<AppUser> {
    return this.user$
      .switchMap(user => {
        // see if the user is null or not
        if (user) {
          return this.userService.get(user.uid);
        }

        return Observable.of(null);
      });
  }
}
