import {Injectable} from '@angular/core';
import {Loja} from "../app/model/Loja";
import {ToastrService} from "ngx-toastr";
import {HttpClient} from "@angular/common/http";
import {environment} from "../app/environment/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LojasService {

  constructor(
    private http: HttpClient, private toastr: ToastrService
  ) {
  }

  salvar(loja: Loja): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/loja',
      {
        nomeLoja: loja.nomeLoja,
        cnpj: loja.cnpj,
        endereco: loja.endereco,
        senha: loja.senha,
      },
      {responseType: 'text'}
    );
  }

  listar(): Observable<Loja[]> {
    return this.http.get<Loja[]>(environment.apiUrl + '/loja');
  }

  deletar(id: number) {
    return this.http.delete(environment.apiUrl + '/loja/' + id).subscribe(() => {
      this.toastr.success('Loja deletada com sucesso!');
    }, error => {
      this.toastr.error('Falha ao deletar loja. Verifique se a loja possui produtos cadastrados.');
    });
  }

  findById(id: number) : Observable<Loja> {
    return this.http.get<Loja>(environment.apiUrl + '/loja/' + id);
  }

  editar(loja: Loja) {
    return this.http.put(
      environment.apiUrl + '/loja',
      {
        id: loja.id,
        nomeLoja: loja.nomeLoja,
        cnpj: loja.cnpj,
        endereco: loja.endereco,
        senha: loja.senha,
      },
      {responseType: 'text'}
    );
  }

  findByCnpj(cnpj: string) : Observable<Loja> {
    return this.http.get<Loja>(environment.apiUrl + '/loja/cnpj/' + cnpj);
  }
}
