import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Loja} from "../../../../model/Loja";
import {LojasService} from "../../../../services/lojas.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  styleUrls: ['./lojas.component.css']
})
export class LojasComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'nomeLoja', 'cnpj'];
  dataSource!: MatTableDataSource<Loja>;

  cnpjMask = "00.000.000/0000-00";

  lojas : Loja[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private lojasService : LojasService) {
  }

  ngOnInit(): void {
    this.listar();
  }

  private listar() {
    this.lojasService.listar().subscribe(lojas => {
      this.lojas = lojas;
      this.dataSource = new MatTableDataSource(this.lojas);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrar(event: Event) {

  }
}
