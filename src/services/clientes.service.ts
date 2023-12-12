import { Injectable } from '@angular/core';
import {Cliente} from "../app/model/Cliente";
import {Observable} from "rxjs";
import {environment} from "../app/environment/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private http: HttpClient,
  ) {}

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
      { responseType: 'text' }
    );
  }
}
