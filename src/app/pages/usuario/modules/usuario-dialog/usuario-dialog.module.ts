import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// material
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

// aplicação
import { UsuarioDialogComponent } from './usuario-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,

        // material
        MatStepperModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
    ],
    exports: [UsuarioDialogComponent],
    declarations: [UsuarioDialogComponent],
    providers: [],
})
export class UsuarioDialogModule { }
