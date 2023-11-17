import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LojasService} from "../lojas.service";
import {ToastrService} from "ngx-toastr";
import {Loja} from "../../../../model/Loja";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-lojas-editar',
  templateUrl: './lojas-editar.component.html',
  styleUrls: ['./lojas-editar.component.css']
})
export class LojasEditarComponent implements OnInit {
  public lojaForm!: FormGroup;
  private isOk: boolean = true;
  private loja: Loja = new Loja();

  constructor(private lojasService: LojasService, private toastr: ToastrService, public dialogRef: MatDialogRef<any>){
  }

  ngOnInit(): void {
    this.lojaForm = new FormGroup({
      nomeLoja: new FormControl('', [Validators.required]),
      cnpj: new FormControl('', [Validators.required]),
      endereco: new FormControl('', [Validators.required]),
      senha: new FormControl('', Validators.required),
    });
  }

  salvar() {
    if(this.prepararSalvar())
      this.preparaObjetoSalvar();
    console.log(this.loja)
    this.lojasService.salvar(this.loja).subscribe((response) => {
      this.toastr.success('Loja salva com sucesso!', 'Sucesso');
      this.dialogRef.close();
    }, (error) => {
      this.toastr.error('Falha ao salvar loja.', 'Erro');
    });
  }

  prepararSalvar() : boolean {
    console.log(this.lojaForm.value)
    if(this.lojaForm.value.nomeLoja == '') {
      this.toastr.error('Nome da loja é obrigatório.', 'Erro');
      this.isOk = false;
    }
    if(this.lojaForm.value.cnpj == '') {
      this.toastr.error('CNPJ é obrigatório.', 'Erro');
      this.isOk = false;
    }
    if(this.lojaForm.value.endereco == '') {
      this.toastr.error('Endereço é obrigatório.', 'Erro');
      this.isOk = false;
    }
    if(this.lojaForm.value.senha == '') {
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
