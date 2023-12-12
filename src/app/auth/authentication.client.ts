import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from "../environment/environment";
import {Loja} from "../model/Loja";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationClient {
  constructor(private http: HttpClient) {
  }

  public loginVendedor(cnpj: string, senha: string): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/loja/login',
      {
        cnpj: cnpj,
        senha: senha,
      },
      {responseType: 'text'}
    );
  }

  public saveCnpjVendedor(cnpj: String) {
    localStorage.setItem('cnpjVendedor', JSON.stringify(cnpj));
  }

  public removeCnpjVendedor() {
    localStorage.removeItem('cnpjVendedor');
  }

  getCnpjVendedor(): string {
    const cnpj = localStorage.getItem('cnpjVendedor');
    return cnpj !== null ? cnpj : "";
  }

  public saveCpfCliente(cnpj: String) {
    localStorage.setItem('cpfCliente', JSON.stringify(cnpj));
  }

  removeCpfCliente() {
    localStorage.removeItem('cpfCliente');
  }

  getCpfCliente(): string {
    const cnpj = localStorage.getItem('cpfCliente');
    return cnpj !== null ? cnpj : "";
  }

  public loginCliente(cpf: string, senha: string): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/cliente/login',
      {
        cpf: cpf,
        senha: senha,
      },
      {responseType: 'text'}
    );
  }

  public registroLoja(loja: Loja) {
    return this.http.post(
      environment.apiUrl + '/loja',
      {
        cnpj: loja.cnpj,
        nomeLoja: loja.nomeLoja,
        senha: loja.senha,
        endereco: loja.endereco,
      },
      {responseType: 'text'}
    );

  }
}
