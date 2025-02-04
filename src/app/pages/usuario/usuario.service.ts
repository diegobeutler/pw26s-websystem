import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// shared
import { CrudService } from 'src/app/shared/components/crud/crud.service';

// aplicação
import { Usuario } from './models/usuario';

@Injectable()
export class UsuarioService extends CrudService<Usuario> {

    constructor(public http: HttpClient) {
        super('usuario', http);
    }

    public get novoRegistro(): Observable<Usuario> {
        return of({
            nome: '',
            sobrenome: '',
            email: '',
            username: '',
            password: '',
        });
    }

    /**
     * @description MOCK FAVOR REMOVER
     */
    public incluir(novo: Usuario): Observable<void> {
        return new Observable(observer => {
            setTimeout(() => {
                // observer.next();
                observer.error("Oops! Não foi possível salvar o registro... :(");
                observer.complete();
            }, 600);
        })
    }

}