import {Component} from '@angular/core';
import {Desconto} from "../../../model/Desconto";
import {MatTableDataSource} from "@angular/material/table";
import {ClientesEditarComponent} from "../clientes/clientes-editar/clientes-editar.component";
import {MatDialog} from "@angular/material/dialog";
import {DescontosEditarComponent} from "./descontos-editar/descontos-editar.component";

@Component({
  selector: 'app-descontos',
  templateUrl: './descontos.component.html',
  styleUrls: ['./descontos.component.css']
})
export class DescontosComponent {
  descontos: Desconto[] = [];
  dataSource!: MatTableDataSource<Desconto>;

  displayedColumns: string[] = ['id', 'acoes'];

  constructor(private modalDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.listar();
  }

  listar() {

  }

  criarDesconto() {
    this.modalDialog.open(DescontosEditarComponent, {
      width: '50%',
      height: '50%',
    }).afterClosed().subscribe(() => {
      this.listar();
    });
  }

  editar(desconto: Desconto) {
  }

  deletar(desconto: Desconto) {
  }

  filtrar(event: Event) {

  }
}
