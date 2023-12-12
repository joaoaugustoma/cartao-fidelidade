import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ClientesService} from "../../../../services/clientes.service";
import {Cliente} from "../../../model/Cliente";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {
  public clienteForm!: FormGroup;
  private isOk: boolean = true;
  private cliente: Cliente = new Cliente();

  constructor(private clientesService: ClientesService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getClienteByCpf();
    this.clienteForm = new FormGroup({
      nome: new FormControl(this.cliente.nome, Validators.required),
      cpf: new FormControl(this.cliente.cpf, Validators.required),
      endereco: new FormControl(this.cliente.endereco, Validators.required),
      dataNascimento: new FormControl(this.cliente.dataNascimento, Validators.required),
      telefone: new FormControl(this.cliente.telefone, Validators.required),
      senha: new FormControl(this.cliente.senha, Validators.required)
    });
  }

  editar() {
    if (this.prepararSalvar())
      this.preparaObjetoSalvar();
    this.clientesService.editar(this.cliente).subscribe((response) => {
      this.toastr.success('Cliente salvo com sucesso!', 'Sucesso');
    }, (error) => {
      this.toastr.error('Falha ao editar cliente.', 'Erro');
    });
  }

  private getClienteByCpf() {
    this.clientesService.findByCpf().subscribe((response) => {
      this.cliente = response;
      console.log(this.cliente);
    });
  }

  private prepararSalvar() {
    if (this.clienteForm.value.nome == '') {
      this.toastr.error('Nome é obrigatório.', 'Erro');
      this.isOk = false;
    }
    if (this.clienteForm.value.cpf == '') {
      this.toastr.error('CPF é obrigatório.', 'Erro');
      this.isOk = false;
    }
    if (this.clienteForm.value.endereco == '') {
      this.toastr.error('Endereço é obrigatório.', 'Erro');
      this.isOk = false;
    }
    if (this.clienteForm.value.dataNascimento == '') {
      this.toastr.error('Data de nascimento é obrigatório.', 'Erro');
      this.isOk = false;
    }
    if (this.clienteForm.value.telefone == '') {
      this.toastr.error('Telefone é obrigatório.', 'Erro');
      this.isOk = false;
    }
    if (this.clienteForm.value.senha == '') {
      this.toastr.error('Senha é obrigatório.', 'Erro');
      this.isOk = false;
    }
    return this.isOk;
  }

  private preparaObjetoSalvar() {
    this.cliente.nome = this.clienteForm.value.nome;
    this.cliente.cpf = this.clienteForm.value.cpf;
    this.cliente.endereco = this.clienteForm.value.endereco;
    this.cliente.dataNascimento = this.clienteForm.value.dataNascimento;
    this.cliente.telefone = this.clienteForm.value.telefone;
    this.cliente.senha = this.clienteForm.value.senha;
  }
}
