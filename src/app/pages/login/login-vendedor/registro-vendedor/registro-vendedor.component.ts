import {Component, OnInit} from '@angular/core';
import {Loja} from "../../../../model/Loja";
import {AuthenticationService} from "../../../../../services/authentication.service";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationClient} from "../../../../auth/authentication.client";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-registro-vendedor',
  templateUrl: './registro-vendedor.component.html',
  styleUrls: ['./registro-vendedor.component.css']
})
export class RegistroVendedorComponent implements OnInit{
  public registroForm!: FormGroup;

  loja: Loja = new Loja();
  public isOK: boolean = true;

  constructor(private authenticationClient: AuthenticationClient, private toastr: ToastrService, private dialogRef: MatDialogRef<RegistroVendedorComponent>) {
  }

  ngOnInit(): void {
    this.registroForm = new FormGroup({
      nomeLoja: new FormControl('', [Validators.required]),
      endereco: new FormControl('', [Validators.required]),
      cnpj: new FormControl('', [Validators.required]),
      senha: new FormControl('', Validators.required),
    });
  }

  registrarLoja() {
    if(this.verificaCampos()) {
      this.preparaOjetoRegistro();
      this.authenticationClient.registroLoja(this.loja).subscribe((response) => {
        this.toastr.success('Loja salva com sucesso!', 'Sucesso');
        // Fecha o modal após o registro bem-sucedido
        this.dialogRef.close();
      }, (error) => {
        this.toastr.error('Falha ao salvar loja.', 'Erro');
      });
    }
  }

  preparaOjetoRegistro() {
    this.loja.nomeLoja = this.registroForm.get('nomeLoja')!.value;
    this.loja.endereco = this.registroForm.get('endereco')!.value;
    this.loja.cnpj = this.registroForm.get('cnpj')!.value;
    this.loja.senha = this.registroForm.get('senha')!.value;
  }

  verificaCampos(): boolean {
    if(this.registroForm.get('nomeLoja')!.value == "") {
      this.toastr.warning('Campo Nome da Loja não pode ser vazio');
      this.isOK = false;
    }
    if(this.registroForm.get('endereco')!.value == "") {
      this.toastr.warning('Campo Endereço não pode ser vazio');
      this.isOK = false;
    }
    if (this.registroForm.get('cnpj')!.value == "") {
      this.toastr.warning('Campo CNPJ não pode ser vazio');
      this.isOK = false;
    }
    if(this.registroForm.get('senha')!.value == "") {
      this.toastr.warning('Campo Senha não pode ser vazio');
      this.isOK = false;
    }
    return this.isOK;
  }
}
