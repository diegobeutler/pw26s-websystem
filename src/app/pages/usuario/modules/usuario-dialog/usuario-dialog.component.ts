import { Component, OnInit } from '@angular/core';

// material
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-usuario-dialog',
    templateUrl: 'usuario-dialog.component.html'
})
export class UsuarioDialogComponent implements OnInit {

    constructor(public dialog: MatDialog) { }

    ngOnInit() { }

}