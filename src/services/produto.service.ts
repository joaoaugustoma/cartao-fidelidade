import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../app/environment/environment";
import {Produto} from "../app/model/Produto";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  listar():Observable<Produto[]> {
    return this.http.get<Produto[]>(environment.apiUrl + '/produto/listar');
  }

  salvar(produto: Produto): Observable<string>  {
    return this.http.post(
      environment.apiUrl + '/produto',
      {
        nomeProduto : produto.nomeProduto,
        valor : produto.valor,
        descricao : produto.descricao,
        loja : produto.loja
      },
      { responseType: 'text' }
    );

  }
}
