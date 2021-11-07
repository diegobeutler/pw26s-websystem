import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

// aplicação
import { UsuarioComponent } from './usuario.page';
import { CardUsuarioGeralComponent } from './cards/card-usuario-geral/card-usuario-geral.component';
import { CardUsuarioIntesseComponent } from './cards/card-usuario-interesse/card-usuario-interesse.component';

const routes: Routes = [
    { path: '', component: UsuarioComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        
        // material
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
    ],
    exports: [],
    declarations: [
        UsuarioComponent,

        // cards
        CardUsuarioGeralComponent,
        CardUsuarioIntesseComponent,
    ],
    providers: [],
})
export class UsuarioModule { }
