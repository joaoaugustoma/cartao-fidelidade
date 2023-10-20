import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-lojas-editar',
  templateUrl: './lojas-editar.component.html',
  styleUrls: ['./lojas-editar.component.css']
})
export class LojasEditarComponent implements OnInit {
  public lojaForm!: FormGroup;

  ngOnInit(): void {
    this.lojaForm = new FormGroup({
      nomeLoja: new FormControl('', [Validators.required]),
      cnpj: new FormControl('', [Validators.required]),
      endereco: new FormControl('', [Validators.required]),
      senha: new FormControl('', Validators.required),
    });
  }

  salvar() {

  }
}
