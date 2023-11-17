import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { MatDialogRef } from "@angular/material/dialog";
import {Cliente} from "../../../../model/Cliente";
import {ClientesService} from "../clientes.service";
import * as moment from "moment";

@Component({
  selector: 'app-clientes-editar',
  templateUrl: './clientes-editar.component.html',
  styleUrls: ['./clientes-editar.component.css']
})
export class ClientesEditarComponent implements OnInit {

  public clienteForm!: FormGroup;
  private isOk: boolean = true;
  private cliente: Cliente = new Cliente();

  constructor(private clientesService: ClientesService, private toastr: ToastrService, public dialogRef: MatDialogRef<any>) {
  }

  ngOnInit(): void {
    this.clienteForm = new FormGroup({
      cpf: new FormControl('', [Validators.required]),
      nome: new FormControl('', [Validators.required]),
      endereco: new FormControl('', [Validators.required]),
      dataNascimento: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      senha: new FormControl('', Validators.required),
    });
  }

  salvar() {
    if (this.prepararSalvar())
      this.preparaObjetoSalvar();
    console.log(this.cliente);
    this.clientesService.salvar(this.cliente).subscribe((response) => {
      this.toastr.success('Cliente salvo com sucesso!', 'Sucesso');
      this.dialogRef.close();
    }, (error) => {
      this.toastr.error('Falha ao salvar cliente.', 'Erro');
    });
  }

  prepararSalvar(): boolean {
    console.log(this.clienteForm.value);
    if (this.clienteForm.value.cpf == '') {
      this.toastr.error('CPF é obrigatório.', 'Erro');
      this.isOk = false;
    }
    if (this.clienteForm.value.nome == '') {
      this.toastr.error('Nome é obrigatório.', 'Erro');
      this.isOk = false;
    }
    if (this.clienteForm.value.endereco == '') {
      this.toastr.error('Endereço é obrigatório.', 'Erro');
      this.isOk = false;
    }
    if (this.clienteForm.value.dataNascimento == '') {
      this.toastr.error('Data de Nascimento é obrigatória.', 'Erro');
      this.isOk = false;
    }
    if (this.clienteForm.value.telefone == '') {
      this.toastr.error('Telefone é obrigatório.', 'Erro');
      this.isOk = false;
    }
    if (this.clienteForm.value.senha == '') {
      this.toastr.error('Senha é obrigatória.', 'Erro');
      this.isOk = false;
    }
    if (moment(this.clienteForm.value.dataNascimento, 'DDMMYYYY').format('YYYY-MM-DD') == 'Invalid date') {
      this.toastr.error('Data de Nascimento inválida.', 'Erro');
      this.isOk = false;
    }

    return this.isOk;
  }

  private preparaObjetoSalvar() {
    this.cliente.cpf = this.clienteForm.value.cpf;
    this.cliente.nome = this.clienteForm.value.nome;
    this.cliente.endereco = this.clienteForm.value.endereco;
    this.cliente.dataNascimento = moment(this.clienteForm.value.dataNascimento, 'DDMMYYYY').format('YYYY-MM-DD')
    this.cliente.telefone = this.clienteForm.value.telefone;
    this.cliente.senha = this.clienteForm.value.senha;
  }
}
