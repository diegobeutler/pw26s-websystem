import { Categoria } from "../../categoria/models/categoria";

export interface Usuario {
    id?: number;
    nome: string;
    sobrenome: string;
    apelido: string;
    username: string;
    password: string;
    permissoes?: any[];
    interesses?: Categoria[];
}
