import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../app/environment/environment";
import {Cliente} from "../app/model/Cliente";
import { Carteira } from 'src/app/model/Carteira';
import {ToastrService} from "ngx-toastr";
import {Loja} from "../app/model/Loja";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  listar():Observable<Cliente[]> {
    return this.http.get<Cliente[]>(environment.apiUrl + '/cliente');
  }

  listarCarteiras():Observable<Carteira[]>{
    return this.http.get<Carteira[]>(environment.apiUrl + '/carteira');
  }

  deletar(id: number) {
    return this.http.delete(environment.apiUrl + '/cliente/' + id).subscribe(() => {
      this.toastr.success('Loja deletada com sucesso!');
    }, error => {
      this.toastr.error('Falha ao deletar loja. Verifique se a loja possui produtos cadastrados.');
    });
  }

  findById(id: number):Observable<Cliente> {
    return this.http.get<Cliente>(environment.apiUrl + '/cliente/' + id);
  }
}
