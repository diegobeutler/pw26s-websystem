
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// shared
import { CrudCard } from 'src/app/shared/components/crud/crud-card';

// aplicação
import { Usuario } from '../../models/usuario';

@Component({
    selector: 'app-card-usuario-geral',
    templateUrl: 'card-usuario-geral.component.html'
})
export class CardUsuarioGeralComponent implements CrudCard<Usuario> {

    /**
     * @description FormGroup do card
     */
    public form: FormGroup;

    constructor() { 
        this.form = this.criarForm();
    }

    /**
     * @description Retorna um novo form
     */
    criarForm(): FormGroup {
        throw new Error('Method not implemented.');
    }

    /**
     * @description Valora o form com o registro
     */
    setForm(registro: Usuario): void {
        this.form.reset(registro);
    }

    /**
     * @description Valora o registro com o form
     */
    setRegistro(registro: Usuario): void {
        Object.assign(registro, this.form.getRawValue());
    }

}