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
    console.log(environment.apiUrl + '/produto');
    return this.http.get<Produto[]>(environment.apiUrl + '/produto');
  }
}
