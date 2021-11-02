import { Categoria } from "../../categoria/models/categoria";

export interface Artigo {
    id?: number;
    titulo: string;
    subtitulo: string;
    palavrasChave: string[];
    texto: string;
    categoria: Categoria;
}
