import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  state = false;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {

    this.state = this.auth.isAuthenticate();

  }

  public logIn(): void {
    this.state = this.auth.login();
  }

  public logOut(): void {
    this.state = this.auth.logout();
  }

}
