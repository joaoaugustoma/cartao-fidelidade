import {Loja} from "./Loja";

export class Produto {
  id!: number;
  nomeProduto !: string;
  valor !: number;
  descricao !: string;
  loja !: Loja;
}
