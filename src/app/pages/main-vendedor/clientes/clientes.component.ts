import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Cliente} from "../../../model/Cliente";
import {ClienteService} from "../../../../services/cliente.service";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'endereco', 'dataNascimento', 'telefone'];
  dataSource!: MatTableDataSource<Cliente>;

  clientes : Cliente[] = [];

  constructor(private clientesService : ClienteService) {
  }

  ngOnInit(): void {
    this.listar();
  }

  private listar() {
    this.clientesService.listar().subscribe(clientes => {
      this.clientes = clientes;
      this.dataSource = new MatTableDataSource(this.clientes);
    });
  }

  ngAfterViewInit() {
  }

  filtrar(event: Event) {

  }
}
