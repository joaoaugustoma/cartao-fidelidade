import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Produto} from "../../../../model/Produto";
import {ToastrService} from "ngx-toastr";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ProdutoService} from "../../../../../services/produto.service";
import {Loja} from "../../../../model/Loja";
import {LojaProdutoComponent} from "../loja-produto/loja-produto.component";

@Component({
  selector: 'app-produtos-editar',
  templateUrl: './produtos-editar.component.html',
  styleUrls: ['./produtos-editar.component.css']
})
export class ProdutosEditarComponent implements OnInit {

  public produtoForm!: FormGroup;
  private isOk: boolean = true;
  private produto: Produto = new Produto();
  public selectedLoja: Loja = new Loja();

  constructor(
    private produtosService: ProdutoService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<any>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Produto = new Produto()
  ) {}

  ngOnInit(): void {
    this.produto = this.data;
    this.produtoForm = new FormGroup({
      nomeProduto: new FormControl(this.produto.nomeProduto, [Validators.required]),
      valor: new FormControl(this.produto.valor, [Validators.required]),
      descricao: new FormControl(this.produto.descricao, [Validators.required]),
      loja: new FormControl(this.produto.loja, [Validators.required]),
    });
  }

  salvar() {
    if (this.prepararSalvar()) {
      this.preparaObjetoSalvar();
      this.produtosService.salvar(this.produto).subscribe((response) => {
        this.toastr.success('Produto salvo com sucesso!', 'Sucesso');
        this.dialogRef.close();
      }, (error) => {
        this.toastr.error('Falha ao salvar produto.', 'Erro');
      });
    }
  }

  prepararSalvar(): boolean {
    console.log(this.produtoForm.value);
    if (this.produtoForm.value.nomeProduto == '') {
      this.toastr.error('Nome do Produto é obrigatório.', 'Erro');
      this.isOk = false;
    }
    if (this.produtoForm.value.valor == '') {
      this.toastr.error('Valor é obrigatório.', 'Erro');
      this.isOk = false;
    }
    if (this.produtoForm.value.descricao == '') {
      this.toastr.error('Descrição é obrigatória.', 'Erro');
      this.isOk = false;
    }
    if (this.selectedLoja == null) {
      this.toastr.error('Loja é obrigatória.', 'Erro');
      this.isOk = false;
    }

    return this.isOk;
  }

  private preparaObjetoSalvar() {
    this.produto.nomeProduto = this.produtoForm.value.nomeProduto;
    this.produto.valor = this.produtoForm.value.valor;
    this.produto.descricao = this.produtoForm.value.descricao;
    console.log(this.selectedLoja);
    this.produto.loja = this.selectedLoja;
    console.log(this.produto);
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
}
