import {Injectable} from '@angular/core';
import {Cliente} from "../app/model/Cliente";
import {Observable} from "rxjs";
import {environment} from "../app/environment/environment";
import {HttpClient} from "@angular/common/http";
import {AuthenticationClient} from "../app/auth/authentication.client";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private http: HttpClient, private authenticationClient: AuthenticationClient
  ) {
  }

  salvar(cliente: Cliente): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/cliente',
      {
        cpf: cliente.cpf,
        nome: cliente.nome,
        endereco: cliente.endereco,
        dataNascimento: cliente.dataNascimento,
        telefone: cliente.telefone,
        senha: cliente.senha,
      },
      {responseType: 'text'}
    );
  }

  findByCpf() {
    return this.http.get<Cliente>(environment.apiUrl + '/cliente/cpf/' + this.authenticationClient.getCpfCliente().substring(1, 12));
  }

  editar(cliente: Cliente): Observable<string> {
    return this.http.put(
      environment.apiUrl + '/cliente',
      {
        cpf: cliente.cpf,
        nome: cliente.nome,
        endereco: cliente.endereco,
        dataNascimento: cliente.dataNascimento,
        telefone: cliente.telefone,
        senha: cliente.senha,
      },
      {responseType: 'text'}
    );
  }
}
