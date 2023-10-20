import { Injectable } from '@angular/core';
import {AuthenticationClient} from "../app/auth/authentication.client";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private tokenKey = 'token';

  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router
  ) {}

  public loginCliente(cpf: string, senha: string): void {
    this.authenticationClient.loginCliente(cpf, senha).subscribe((token) => {
      localStorage.setItem(this.tokenKey, token);
      this.router.navigate(['/']);
    });
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }
}
