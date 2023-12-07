import {Component, Inject, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Loja} from "../../../../model/Loja";
import {Cliente} from "../../../../model/Cliente";
import {CarteirasService} from "../carteiras.service";
import {Carteira} from "../../../../model/Carteira";
import {LojaProdutoComponent} from "../../produtos/loja-produto/loja-produto.component";
import {ClienteCarteiraComponent} from "../cliente-carteira/cliente-carteira.component";

@Component({
  selector: 'app-carteiras-editar',
  templateUrl: './carteiras-editar.component.html',
  styleUrls: ['./carteiras-editar.component.css']
})
export class CarteirasEditarComponent implements OnInit {
  public carteiraForm!: FormGroup;
  private isOk: boolean = true;
  private carteira: Carteira = new Carteira();
  public selectedLoja: Loja = new Loja();
  public selectedCliente: Cliente = new Cliente();

  constructor(
    private carteiraService: CarteirasService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<any>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Carteira = new Carteira()
  ) {
  }

  ngOnInit(): void {
    this.carteira = this.data || new Carteira();
    this.carteiraForm = new FormGroup({
      qtdPontos: new FormControl(this.carteira.quantidadePontos, [Validators.required]),
      cliente: new FormControl(this.carteira.cliente, [Validators.required]),
      loja: new FormControl(this.carteira.loja, [Validators.required]),
    });
  }

  salvar() {
    if (this.prepararSalvar()) {
      this.preparaObjetoSalvar();
      this.carteiraService.salvar(this.carteira).subscribe((response) => {
        this.toastr.success('Carteira salvo com sucesso!', 'Sucesso');
        this.dialogRef.close();
      }, (error) => {
        this.toastr.error('Falha ao salvar carteira.', 'Erro');
      });
    }
  }

  private prepararSalvar() {
    if (this.selectedLoja == null) {
      this.toastr.error('Loja é obrigatória.', 'Erro');
      this.isOk = false;
    }

    if (this.carteiraForm.value.qtdPontos == '') {
      this.toastr.error('Quantidade de pontos é obrigatória.', 'Erro');
      this.isOk = false;
    }
    if (this.selectedCliente == null) {
      this.toastr.error('Cliente é obrigatório.', 'Erro');
      this.isOk = false;
    }
    if (this.selectedLoja == null) {
      this.toastr.error('Loja é obrigatória.', 'Erro');
      this.isOk = false;
    }

    return this.isOk;
  }

  private preparaObjetoSalvar() {
    this.carteira.quantidadePontos = this.carteiraForm.value.qtdPontos;
    this.carteira.cliente = this.selectedCliente;
    this.carteira.loja = this.selectedLoja;
  }

  selecionaLoja() {
    const dialogRef = this.dialog.open(LojaProdutoComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((selectedLoja: Loja) => {
      if (selectedLoja) {
        this.selectedLoja = selectedLoja;
      }
    });
  }

  selecionaCliente() {
    const dialogRef = this.dialog.open(ClienteCarteiraComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((selectedCliente: Cliente) => {
      if (selectedCliente) {
        this.selectedCliente = selectedCliente;
      }
    });
  }
}
