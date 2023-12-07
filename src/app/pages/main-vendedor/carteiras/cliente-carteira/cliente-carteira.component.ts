import {Component, Inject} from '@angular/core';
import {Cliente} from "../../../../model/Cliente";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ClienteService} from "../../../../../services/cliente.service";

@Component({
  selector: 'app-cliente-carteira',
  templateUrl: './cliente-carteira.component.html',
  styleUrls: ['./cliente-carteira.component.css']
})
export class ClienteCarteiraComponent {

  clientes: Cliente[] = [];

  constructor(
    public dialogRef: MatDialogRef<ClienteCarteiraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.clienteService.listar().subscribe((response) => {
      this.clientes = response;
    });
  }

  selecionar(cliente: Cliente): void {
    this.dialogRef.close(cliente);
  }

  fechar(): void {
    this.dialogRef.close();
  }

}
