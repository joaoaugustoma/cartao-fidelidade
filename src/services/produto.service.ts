import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../app/environment/environment";
import {Produto} from "../app/model/Produto";
import {ToastrService} from "ngx-toastr";
import {Loja} from "../app/model/Loja";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

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

  deletar(id: number) {
    return this.http.delete(environment.apiUrl + '/produto/' + id).subscribe(() => {
      this.toastr.success('Produto deletado com sucesso!');
    }, error => {
      this.toastr.error('Falha ao deletar produto.');
    });
  }

  findById(id: number) {
    return this.http.get<Loja>(environment.apiUrl + '/produto/' + id);
  }
}
