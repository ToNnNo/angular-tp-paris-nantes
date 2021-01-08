import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private static readonly TOKEN = 'authentication';

  constructor() { }

  public login(): boolean {

    // récupérer username/password
    // faire une requete vers API avec username/password
    // récupère le jeton de connexion (JWT = Json Web Token)

    localStorage.setItem(AuthenticationService.TOKEN, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');

    return true;
  }

  public logout(): boolean {
    localStorage.removeItem(AuthenticationService.TOKEN);

    return false;
  }

  public getToken(): string {
    return localStorage.getItem(AuthenticationService.TOKEN);
  }

  public isAuthenticate(): boolean {
    return localStorage.getItem(AuthenticationService.TOKEN) !== null;
  }
}
