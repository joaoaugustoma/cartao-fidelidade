import {Component, Inject} from '@angular/core';
import {Loja} from "../../../../model/Loja";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LojasService} from "../../lojas/lojas.service";

@Component({
  selector: 'app-loja-produto',
  templateUrl: './loja-produto.component.html',
  styleUrls: ['./loja-produto.component.css']
})
export class LojaProdutoComponent {

  lojas: Loja[] = []; // Assuming you have a service to fetch the list of stores

  constructor(
    public dialogRef: MatDialogRef<LojaProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public lojasService: LojasService
  ) { }

  ngOnInit(): void {
    this.lojasService.listar().subscribe((response) => {
      this.lojas = response;
    });
  }

  selecionar(loja: Loja): void {
    this.dialogRef.close(loja);
  }

  fechar(): void {
    this.dialogRef.close();
  }
}
