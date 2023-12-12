import {Component, OnInit} from '@angular/core';
import {Carteira} from "../../../model/Carteira";
import {PontosService} from "../../../../services/pontos.service";

@Component({
  selector: 'app-pontos',
  templateUrl: './pontos.component.html',
  styleUrls: ['./pontos.component.css']
})
export class PontosComponent implements OnInit {
  carteiras: Carteira[] = [];

  constructor(private pontosService: PontosService) {
  }

  ngOnInit(): void {
    this.pontosService.getCarteirasCliente().subscribe((response) => {
      this.carteiras = response;
    });
  }
}
