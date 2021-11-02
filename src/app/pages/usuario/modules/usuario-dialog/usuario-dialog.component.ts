import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// aplicação
import { UsuarioService } from '../../usuario.service';

@Component({
    selector: 'app-usuario-dialog',
    templateUrl: 'usuario-dialog.component.html',
    styleUrls: ['./usuario-dialog.component.scss'],
    providers: [
        // UsuarioService
    ]
})
export class UsuarioDialogComponent implements OnInit {

    /**
     * @description FormGroup da modal 
     */
    public form: FormGroup;

    /**
     * @description Label do botão de fechamento da modal
     */
    public buttonLabel: 'Cancelar' | 'Finalizar';

    constructor(
        // private usuarioService: UsuarioService,
        private formBuilder: FormBuilder,
    ) {
        // inicializa o form
        this.form = this.criarForm();

        // incializa as variáveis do template
        this.buttonLabel = 'Cancelar';
    }

    ngOnInit() { }

    public get dadosPessoaisForm(): FormGroup {
        return this.form.controls['dadosPessoais'] as FormGroup;
    }

    public get dadosUsuarioForm(): FormGroup {
        return this.form.controls['dadosUsuario'] as FormGroup;
    }

    private criarForm(): FormGroup {
        return this.formBuilder.group({
            dadosPessoais: this.formBuilder.group({
                nome: [null, Validators.required],
                sobrenome: [null, Validators.required],
                email: [null, Validators.required],
            }),
            dadosUsuario: this.formBuilder.group({
                username: [null, Validators.required],
                password: [null, Validators.required],
                confirmacaoPassword: [null, Validators.required],
            }),
        });
    }

    /**
     * @description Executa no click do botão "Cadastrar" do stepper
     * * Valida o form e cadastra o usuário
     */
    public onClickBtnCadastrar() {
        this.form.updateValueAndValidity();

        if (this.form.valid) {
            // TODO: cadastrar o usuário
            this.buttonLabel = 'Finalizar';
        }
    }

}
