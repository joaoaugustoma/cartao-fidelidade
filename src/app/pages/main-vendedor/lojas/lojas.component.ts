import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Loja} from "../../../model/Loja";
import {MatDialog} from "@angular/material/dialog";
import {LojasEditarComponent} from "./lojas-editar/lojas-editar.component";
import {LojasService} from "./lojas.service";
import {ConfirmacaoModalComponent} from "../../confirmacao-modal-component/confirmacao-modal.component";

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  styleUrls: ['./lojas.component.css']
})
export class LojasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nomeLoja', 'cnpj', 'acoes'];
  dataSource!: MatTableDataSource<Loja>;

  lojas: Loja[] = [];

  constructor(private lojasService: LojasService, private modalDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.listar();
  }

  private listar() {
    this.lojasService.listar().subscribe(lojas => {
      this.lojas = lojas;
      this.dataSource = new MatTableDataSource(this.lojas);
    });
  }

  filtrar(event: Event) {

  }

  criarLoja() {
    this.modalDialog.open(LojasEditarComponent, {
      width: '50%',
      height: '50%',
    }).afterClosed().subscribe(() => {
      this.listar();
    });
  }

  editarLoja(row: Loja) {
    this.lojasService.findById(row.id).subscribe(loja => {
      this.modalDialog.open(LojasEditarComponent, {
        width: '50%',
        height: '50%',
        data: loja
      }).afterClosed().subscribe(() => {
        this.listar();
      });
    });
  }

  deletarLoja(row: Loja) {
    this.modalDialog.open(ConfirmacaoModalComponent).componentInstance.confirmado.subscribe((confirmado: boolean) => {
      if (confirmado) {
        this.lojasService.deletar(row.id);
        this.listar();
      }
      this.modalDialog.closeAll();
    });
  }
}
