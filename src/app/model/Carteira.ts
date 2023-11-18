import { Cliente } from "./Cliente";
import { Loja } from "./Loja";

export class Carteira{
    id!: number;
    quantidadePontos!: number;
    loja!: Loja;
    cliente!: Cliente;
}