import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationClient {
  constructor(private http: HttpClient) {}

  public loginCliente(cpf: string, senha: string): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/cliente/login',
      {
        cpf: cpf,
        senha: senha,
      },
      { responseType: 'text' }
    );
  }

  public loginVendedor(email: string, senha: string): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/vendedor/login',
      {
        email: email,
        senha: senha,
      },
      { responseType: 'text' }
    );
  }

  // public registerCliente(
  //   cpfCnpj: string,
  //   email: string,
  //   senha: string
  // ): Observable<string> {
  //   return this.http.post(
  //     environment.apiUrl + '/user/register',
  //     {
  //       cpfCnpj: cpfCnpj,
  //       email: email,
  //       senha: senha,
  //     },
  //     { responseType: 'text' }
  //   );
  // }
}
