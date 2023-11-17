import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../app/environment/environment";
import {Observable} from "rxjs";
import {Loja} from "../app/model/Loja";

@Injectable({
  providedIn: 'root'
})
export class LojasService {

  constructor(private http: HttpClient) { }

  listar():Observable<Loja[]> {
    return this.http.get<Loja[]>(environment.apiUrl + '/loja');
  }

  deletar(id: number) {
    return this.http.delete(environment.apiUrl + '/loja/' + id);
  }

  findById(id: number) {
    // return this.http.post<Loja>(environment.apiUrl + '/loja/', id);

  }
}
