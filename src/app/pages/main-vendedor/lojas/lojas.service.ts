import {Injectable} from '@angular/core';
import {Loja} from "../../../model/Loja";
import {ToastrService} from "ngx-toastr";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LojasService {

  constructor(
    private http: HttpClient,
  ) {}

  salvar(loja: Loja): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/loja',
      {
        nomeLoja: loja.nomeLoja,
        cnpj: loja.cnpj,
        endereco: loja.endereco,
        senha: loja.senha,
      },
      { responseType: 'text' }
    );
  }
}
