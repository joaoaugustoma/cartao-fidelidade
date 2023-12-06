import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Cliente} from "../../../model/Cliente";
import {ClienteService} from "../../../../services/cliente.service";
import {Produto} from "../../../model/Produto";
import {LojasEditarComponent} from "../lojas/lojas-editar/lojas-editar.component";
import {MatDialog} from "@angular/material/dialog";
import {ClientesEditarComponent} from "./clientes-editar/clientes-editar.component";
import {ConfirmacaoModalComponent} from "../../confirmacao-modal-component/confirmacao-modal.component";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'endereco', 'dataNascimento', 'telefone', 'acoes'];
  dataSource!: MatTableDataSource<Cliente>;

  clientes : Cliente[] = [];

  constructor(private clientesService : ClienteService, private modalDialog: MatDialog) {
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

  editar(row: Produto) {
    this.clientesService.findById(row.id).subscribe(loja => {
      this.modalDialog.open(ClientesEditarComponent, {
        width: '50%',
        height: '50%',
        data: loja
      }).afterClosed().subscribe(() => {
        this.listar();
      });
    });
  }

  deletar(row: Produto) {
    this.modalDialog.open(ConfirmacaoModalComponent).componentInstance.confirmado.subscribe((confirmado: boolean) => {
      if (confirmado) {
        this.clientesService.deletar(row.id);
        this.listar();
      }
      this.modalDialog.closeAll();
    });
  }

  criarCliente() {
    this.modalDialog.open(ClientesEditarComponent, {
      width: '50%',
      height: '50%',
    }).afterClosed().subscribe(() => {
      this.listar();
    });
  }
}
