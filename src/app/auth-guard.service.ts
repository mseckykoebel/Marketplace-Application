import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import "rxjs/add/operator/map";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  // RouterStateSnapshot: get the URL that the user wanted when they tried to log in
  canActivate(route, state: RouterStateSnapshot) {
    // authentication status of the current user
    // map observable of firebase user to an observable
    // of boolean in the funciton, and returning it
    return this.auth.user$.map(user => {
      if (user) {
        return true;
      } else {
        this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
        return false;
      }

    });
  }
}
