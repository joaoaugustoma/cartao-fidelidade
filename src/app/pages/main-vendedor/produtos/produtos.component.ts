import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Produto} from "../../../model/Produto";
import {ProdutoService} from "../../../../services/produto.service";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'nomeProduto', 'valor', 'nomeLoja'];
  dataSource!: MatTableDataSource<Produto>;

  produtos : Produto[] = [];

  constructor(private produtoService : ProdutoService) {
  }

  ngOnInit(): void {
    this.listar();
  }

  private listar() {
    this.produtoService.listar().subscribe(produtos => {
      console.log(produtos)
      this.produtos = produtos;
      this.dataSource = new MatTableDataSource(this.produtos);
    });
  }

  ngAfterViewInit() {
  }

  filtrar(event: Event) {

  }
}
