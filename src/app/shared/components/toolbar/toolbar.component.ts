import { Component, OnInit } from '@angular/core';

// aplicação
import { LabelValue } from '../../models/label-value';
import { getToolbarButtonActionButtonOptions, ToolbarButtonActionType } from './models/enums/toolbar-button-action';

@Component({
    selector: 'app-toolbar',
    templateUrl: 'toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    // enum options
    public buttonOptions: LabelValue[];

    constructor() {
        // inicializa os enums
        this.buttonOptions = getToolbarButtonActionButtonOptions();
        console.log(this.buttonOptions[0].label);
    }

    ngOnInit() { }

    public executeAction(action: ToolbarButtonActionType) {
        switch (action) {
            default:
                alert('ação!');
                break;
        }
    }

}