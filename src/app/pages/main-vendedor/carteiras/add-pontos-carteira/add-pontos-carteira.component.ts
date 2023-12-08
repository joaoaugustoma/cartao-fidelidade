import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CarteirasService} from "../carteiras.service";
import {Carteira} from "../../../../model/Carteira";
import {ToastrService} from "ngx-toastr";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-pontos-carteira',
  templateUrl: './add-pontos-carteira.component.html',
  styleUrls: ['./add-pontos-carteira.component.css']
})
export class AddPontosCarteiraComponent implements OnInit {
  public adicionarPontosForm!: FormGroup;
  private isOk: boolean = true;

  constructor(
    private carteiraService: CarteirasService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<AddPontosCarteiraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Carteira
  ) {}

  ngOnInit(): void {
    this.adicionarPontosForm = new FormGroup({
      pontosParaAdicionar: new FormControl('', [Validators.required, Validators.min(1)]),
    });
  }

  adicionarPontos() {
    if (this.prepararAdicionarPontos()) {
      this.carteiraService.adicionarPontos(this.data.id, this.adicionarPontosForm.value.pontosParaAdicionar);
      this.dialogRef.close();
    }
  }

  prepararAdicionarPontos(): boolean {
    if (this.adicionarPontosForm.value.pontosParaAdicionar === '') {
      this.toastr.error('A quantidade de pontos é obrigatória.', 'Erro');
      this.isOk = false;
    }
    return this.isOk;
  }
}
