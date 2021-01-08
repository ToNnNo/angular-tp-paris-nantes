import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  state = false;

  constructor(
    private auth: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.state = this.auth.isAuthenticate();
  }

  public logIn(): void {
    this.state = this.auth.login();

    // return (cond) ? true: false;

    if ( this.route.snapshot.queryParamMap.has('redirect') ) {
      this.router.navigateByUrl( this.route.snapshot.queryParamMap.get('redirect') );
    }
  }

  public logOut(): void {
    this.state = this.auth.logout();
  }

}
