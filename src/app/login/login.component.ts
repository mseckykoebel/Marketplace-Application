import { Component } from "@angular/core";
// import all from firebase
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {

  constructor(private auth: AuthService) { }

  login() {
    // run the login method of the authentication service
    this.auth.login();
  }

}
