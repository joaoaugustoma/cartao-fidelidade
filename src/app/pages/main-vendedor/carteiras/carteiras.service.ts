import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Carteira} from "../../../model/Carteira";
import {environment} from "../../../environment/environment";
import {Loja} from "../../../model/Loja";
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class CarteirasService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  listar():Observable<Carteira[]> {
    console.log(this.http.get<Carteira[]>(environment.apiUrl + '/carteira'));
    return this.http.get<Carteira[]>(environment.apiUrl + '/carteira');
  }

  salvar(carteira: Carteira): Observable<string>  {
    console.log(carteira)
    return this.http.post(
      environment.apiUrl + '/carteira',
      {
        loja : carteira.loja,
        cliente : carteira.cliente,
        quantidadePontos : carteira.quantidadePontos,
      },
      { responseType: 'text' }
    );

  }

  deletar(id: number) {
    return this.http.delete(environment.apiUrl + '/carteira/' + id).subscribe(() => {
      this.toastr.success('Carteira deletada com sucesso!');
    }, error => {
      this.toastr.error('Falha ao deletar carteira.');
    });
  }

  findById(id: number) {
    return this.http.get<Loja>(environment.apiUrl + '/carteira/' + id);
  }
}
