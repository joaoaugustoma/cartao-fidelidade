import { Injectable } from '@angular/core';
import {AuthenticationClient} from "../app/auth/authentication.client";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private tokenKey = 'token';

  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  public loginCliente(cpf: string, senha: string): void {
    this.authenticationClient.loginCliente(cpf, senha).subscribe((token) => {
      localStorage.setItem(this.tokenKey, token);
      this.router.navigate(['/cliente']);
      this.toastr.success('Login efetuado com sucesso!', 'Sucesso');
    }, (error) => {
      this.toastr.error('Falha ao efetuar o login. Verifique suas credenciais.', 'Erro');
    });
  }

  public loginVendedor(cnpj: string, senha: string): void {
    this.authenticationClient.loginVendedor(cnpj, senha).subscribe((token) => {
      localStorage.setItem(this.tokenKey, token);
      this.router.navigate(['/vendedor']);
      this.toastr.success('Login efetuado com sucesso!', 'Sucesso');

    }, (error) => {
      this.toastr.error('Falha ao efetuar o login. Verifique suas credenciais.', 'Erro');
    });
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/loginCliente']);
    this.toastr.success('Logout efetuado com sucesso!');
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }
}
