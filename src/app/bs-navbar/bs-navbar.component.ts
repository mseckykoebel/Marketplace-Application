import { Component } from "@angular/core";
import { AuthService } from "../auth.service";
import { AppUser } from "../models/app.user";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "bs-navbar",
  templateUrl: "./bs-navbar.component.html",
  styleUrls: ["./bs-navbar.component.css"]
})
export class BsNavbarComponent {
  // to remove the infinite loop
  appUser: AppUser;

  // we are subscribing the entire time, and we need to remain subbed as we keep track of logout
  constructor(private auth: AuthService) {
    // subscribe to this
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  logout() {
    this.auth.logout();
  }
}
