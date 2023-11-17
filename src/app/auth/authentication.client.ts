import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../environment/environment";
import {Loja} from "../model/Loja";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationClient {
  constructor(private http: HttpClient) {}

  public loginVendedor(cnpj: string, senha: string): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/loja/login',
      {
        cnpj: cnpj,
        senha: senha,
      },
      { responseType: 'text' }
    );
  }

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
  public registroLoja(loja: Loja) {
    console.log(loja);
    return this.http.post(
      environment.apiUrl + '/loja',
      {
        cnpj: loja.cnpj,
        nomeLoja: loja.nomeLoja,
        senha: loja.senha,
        endereco: loja.endereco,
      },
      { responseType: 'text' }
    );

  }
}
