import {Injectable} from '@angular/core';
import {Carteira} from "../app/model/Carteira";
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {environment} from "../app/environment/environment";
import {Observable} from "rxjs";
import {AuthenticationClient} from "../app/auth/authentication.client";

@Injectable({
  providedIn: 'root'
})
export class PontosService {

  constructor(private http: HttpClient, private toastr: ToastrService, private authenticationClient: AuthenticationClient) { }

  getCarteirasCliente() : Observable<Carteira[]>{
    return this.http.get<Carteira[]>(environment.apiUrl + '/carteira/pontos/' + this.authenticationClient.getCpfCliente().substring(1,12));
  }
}
