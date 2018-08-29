// this is the root component of the application
import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  // read the local storage and return the user
  constructor(private userSerice: UserService, private auth: AuthService, router: Router) {
    auth.user$.subscribe(user => {
      if (user) {
        // store the user in the database, in a service
        // here, each time we do, we have the up to date name, as we are not always creating
        // a new user, but updating the user
        userSerice.save(user);
        // here we are doing the routing
        const returnUrl = localStorage.getItem("returnUrl");
        router.navigateByUrl(returnUrl);
      }
    });
  }
}
