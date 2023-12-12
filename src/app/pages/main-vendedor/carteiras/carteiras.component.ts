import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CarteirasService} from "./carteiras.service";
import {MatTableDataSource} from "@angular/material/table";
import {Carteira} from "../../../model/Carteira";
import {ConfirmacaoModalComponent} from "../../confirmacao-modal-component/confirmacao-modal.component";
import {CarteirasEditarComponent} from "./carteiras-editar/carteiras-editar.component";
import {AddPontosCarteiraComponent} from "./add-pontos-carteira/add-pontos-carteira.component";
import {LojasService} from "../../../../services/lojas.service";
import {AuthenticationClient} from "../../../auth/authentication.client";
import {Loja} from "../../../model/Loja";

@Component({
  selector: 'app-carteiras',
  templateUrl: './carteiras.component.html',
  styleUrls: ['./carteiras.component.css']
})
export class CarteirasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nomeLoja', 'nomeCliente', 'qtdPontos', 'acoes'];
  dataSource!: MatTableDataSource<Carteira>;
  carteira: Carteira = new Carteira();

  carteiras: Carteira[] = [];

  constructor(private carteiraService: CarteirasService, private lojaService: LojasService, private authenticationClient: AuthenticationClient, private modalDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.listar();
  }

  private listar() {
    this.carteiraService.listar().subscribe(carteiras => {
      this.carteiras = carteiras;
      this.dataSource = new MatTableDataSource(this.carteiras);
    });
  }

  deletar(row: Carteira) {
    this.modalDialog.open(ConfirmacaoModalComponent).componentInstance.confirmado.subscribe((confirmado: boolean) => {
      if (confirmado) {
        this.carteiraService.deletar(row.id);
        this.listar();
      }
      this.modalDialog.closeAll();
    });
  }

  filtrar($event: KeyboardEvent) {

  }

  criar() {
    this.preparaObjetoCriar();
    setTimeout(() => {
      this.modalDialog.open(CarteirasEditarComponent, {
        width: '50%',
        height: '50%',
        data: this.carteira
      }).afterClosed().subscribe(() => {
        this.listar();
      });
    }, 100);
  }

  addPontos(row: Carteira) {
    this.modalDialog.open(AddPontosCarteiraComponent, {
      width: '50%',
      height: '20%',
      data: row
    }).afterClosed().subscribe(() => {
      this.listar();
    });
  }

  preparaObjetoCriar() {
    this.lojaService.findByCnpj(this.authenticationClient.getCnpjVendedor())
      .subscribe(
        (loja: Loja) => {
          this.carteira.loja = loja;
        }
      );
  }
}
