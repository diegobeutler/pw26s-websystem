import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// material
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

// aplicação
import { UsuarioDialogComponent } from './usuario-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,

        // material
        MatStepperModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatIconModule,
    ],
    exports: [UsuarioDialogComponent],
    declarations: [UsuarioDialogComponent],
    providers: [],
})
export class UsuarioDialogModule { }
