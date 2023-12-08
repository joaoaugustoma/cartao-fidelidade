import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Produto} from "../../../model/Produto";
import {ProdutoService} from "../../../../services/produto.service";
import {MatDialog} from "@angular/material/dialog";
import {ProdutosEditarComponent} from "./produtos-editar/produtos-editar.component";
import {ConfirmacaoModalComponent} from "../../confirmacao-modal-component/confirmacao-modal.component";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'nomeProduto', 'valor', 'nomeLoja', 'acoes'];
  dataSource!: MatTableDataSource<Produto>;

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService, private modalDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.listar();
  }

  private listar() {
    this.produtoService.listar().subscribe(produtos => {
      this.produtos = produtos;
      this.dataSource = new MatTableDataSource(this.produtos);
    });
  }

  ngAfterViewInit() {
  }


  editar(row: Produto) {
    this.produtoService.findById(row.id).subscribe(produto => {
      this.modalDialog.open(ProdutosEditarComponent, {
        width: '50%',
        height: '50%',
        data: produto
      }).afterClosed().subscribe(() => {
        this.listar();
      });
    });
  }

  deletar(row: Produto) {
    this.modalDialog.open(ConfirmacaoModalComponent).componentInstance.confirmado.subscribe((confirmado: boolean) => {
      if (confirmado) {
        this.produtoService.deletar(row.id);
        this.listar();
      }
      this.modalDialog.closeAll();
    });
  }

  filtrar($event: KeyboardEvent) {

  }

  criar() {
    this.modalDialog.open(ProdutosEditarComponent, {
      width: '50%',
      height: '50%',
    }).afterClosed().subscribe(() => {
      this.listar();
    });
  }
}
