import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../app/environment/environment";
import {Cliente} from "../app/model/Cliente";
import { Carteira } from 'src/app/model/Carteira';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  listar():Observable<Cliente[]> {
    return this.http.get<Cliente[]>(environment.apiUrl + '/cliente');
  }

  listarCarteiras():Observable<Carteira[]>{
    return this.http.get<Carteira[]>(environment.apiUrl + '/carteira');
  }
}
