import { Component, OnInit, ViewChild } from '@angular/core';

// pages
import { UsuarioDialogComponent } from 'src/app/pages/usuario/modules/usuario-dialog/usuario-dialog.component';

// aplicação
import { LabelValue } from '../../models/label-value';
import { ToolbarButtonActionType, getToolbarButtonActionLoginOptions } from './models/enums/toolbar-button-action';

@Component({
    selector: 'app-toolbar',
    templateUrl: 'toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    @ViewChild(UsuarioDialogComponent)
    private usuarioDialog?: UsuarioDialogComponent;

    // enum options
    public buttonOptions: LabelValue[];

    constructor() {
        // inicializa os enums
        this.buttonOptions = getToolbarButtonActionLoginOptions();
    }

    ngOnInit() { }

    /**
     * @description Chamado pelos botões da toolbar
     * @param action Ação do botão
     */
    public executeAction(action: ToolbarButtonActionType) {
        switch (action) {
            case 'LOGIN':
                if (this.usuarioDialog) this.usuarioDialog.abrirDialog();
                break;
            case 'INFO':
                window.open('https://github.com/JoaoLeonardo/pw26s-websystem');
                break;
        }
    }

}