import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpjFormat'
})
export class CnpjFormatPipe implements PipeTransform {
  transform(cnpj: string): string {
    if (cnpj) {
      cnpj = cnpj.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
      cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
      return cnpj;
    }
    return '';
  }
}
