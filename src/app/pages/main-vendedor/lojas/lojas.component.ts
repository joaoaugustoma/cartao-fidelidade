import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Loja} from "../../../model/Loja";
import {LojasService} from "../../../../services/lojas.service";
import {Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {LojasEditarComponent} from "./lojas-editar/lojas-editar.component";

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  styleUrls: ['./lojas.component.css']
})
export class LojasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nomeLoja', 'cnpj', 'acoes'];
  dataSource!: MatTableDataSource<Loja>;

  lojas : Loja[] = [];

  constructor(private lojasService : LojasService, private modalDialog: MatDialog) {
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
    // this.lojasService.findById(row.id).subscribe(loja => {
    //   this.modalDialog.open(LojasEditarComponent, {
    //     width: '50%',
    //     height: '50%',
    //     data: loja
    //   }).afterClosed().subscribe(() => {
    //     this.listar();
    //   });
    // }
  }

  deletarLoja(row: Loja) {
    // this.lojasService.deletar(row.id).subscribe(() => {
    //   this.listar();
    // });
  }
}
