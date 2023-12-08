import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LojasService} from "../lojas.service";
import {ToastrService} from "ngx-toastr";
import {Loja} from "../../../../model/Loja";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-lojas-editar',
  templateUrl: './lojas-editar.component.html',
  styleUrls: ['./lojas-editar.component.css']
})
export class LojasEditarComponent implements OnInit {
  public lojaForm!: FormGroup;
  private isOk: boolean = true;
  private loja: Loja = new Loja();

  constructor(private lojasService: LojasService, private toastr: ToastrService, public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: Loja) {
  }

  ngOnInit(): void {
    this.loja = this.data || new Loja();
    this.lojaForm = new FormGroup({
      nomeLoja: new FormControl(this.loja.nomeLoja, [Validators.required]),
      cnpj: new FormControl(this.loja.cnpj, [Validators.required]),
      endereco: new FormControl(this.loja.endereco, [Validators.required]),
      senha: new FormControl(this.loja.senha, Validators.required),
    });
  }

  salvar() {
    if (this.prepararSalvar())
      this.preparaObjetoSalvar();
    if (this.loja.id != null) {
      this.lojasService.editar(this.loja).subscribe((response) => {
        this.toastr.success('Loja salva com sucesso!', 'Sucesso');
        this.dialogRef.close();
      }, (error) => {
        this.toastr.error('Falha ao editar loja.', 'Erro');
      });
    } else {
      this.lojasService.salvar(this.loja).subscribe((response) => {
        this.toastr.success('Loja salva com sucesso!', 'Sucesso');
        this.dialogRef.close();
      }, (error) => {
        this.toastr.error('Falha ao salvar loja.', 'Erro');
      });
    }
  }

  prepararSalvar(): boolean {
    if (this.lojaForm.value.nomeLoja == '') {
      this.toastr.error('Nome da loja é obrigatório.', 'Erro');
      this.isOk = false;
    }
    if (this.lojaForm.value.cnpj == '') {
      this.toastr.error('CNPJ é obrigatório.', 'Erro');
      this.isOk = false;
    }
    if (this.lojaForm.value.endereco == '') {
      this.toastr.error('Endereço é obrigatório.', 'Erro');
      this.isOk = false;
    }
    if (this.lojaForm.value.senha == '') {
      this.toastr.error('Senha é obrigatória.', 'Erro');
      this.isOk = false;
    }
    return this.isOk;
  }

  private preparaObjetoSalvar() {
    this.loja.nomeLoja = this.lojaForm.value.nomeLoja;
    this.loja.cnpj = this.lojaForm.value.cnpj;
    this.loja.endereco = this.lojaForm.value.endereco;
    this.loja.senha = this.lojaForm.value.senha;
  }
}
