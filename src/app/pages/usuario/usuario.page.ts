import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

// material
import { MatSnackBar } from '@angular/material/snack-bar';

// shared
import { CrudComponent } from 'src/app/shared/components/crud/crud-component';

// aplicação
import { Usuario } from './models/usuario';
import { UsuarioService } from './usuario.service';

@Component({
    selector: 'app-usuario',
    templateUrl: 'usuario.page.html',
    providers: [ UsuarioService ]
})
export class UsuarioComponent extends CrudComponent<Usuario> implements OnInit {

    constructor(
        public service: UsuarioService,
        public formBuilder: FormBuilder,
        public snackBar: MatSnackBar, 
        public route: ActivatedRoute,
    ) { 
        super(formBuilder, service, snackBar, route);
    }
    
    ngOnInit() { }

    public criarForm(): FormGroup {
        return this.formBuilder.group({
            id: [null],
            nome: [null, Validators.required],
            sobrenome: [null, Validators.required],
            email: [null, Validators.required],
            username: [null, Validators.required],
            password: [null, Validators.required],
            permissoes: [],
            interesses: [],
        })
    }

    public get novoRegistro(): Usuario {
        return {
            nome: '',
            sobrenome: '',
            email: '',
            username: '',
            password: '',
        };
    }

}