import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environment/environment";
import {Observable} from "rxjs";
import {Loja} from "../model/Loja";

@Injectable({
  providedIn: 'root'
})
export class LojasService {

  constructor(private http: HttpClient) { }

  listar():Observable<Loja[]> {
    return this.http.get<Loja[]>(environment.apiUrl + 'loja');
  }
}
