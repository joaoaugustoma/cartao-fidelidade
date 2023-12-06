import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirmacao-modal',
  template: `
    <h2>Deseja realmente excluir esta loja?</h2>
    <button (click)="confirmar()">Confirmar</button>
    <button (click)="cancelar()">Cancelar</button>
  `,
})
export class ConfirmacaoModalComponent {
  @Output() confirmado = new EventEmitter<boolean>();

  confirmar() {
    this.confirmado.emit(true);
  }

  cancelar() {
    this.confirmado.emit(false);
  }
}
