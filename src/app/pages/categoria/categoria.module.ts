import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

// aplicação
import { CategoriaComponent } from './categoria.page';

const routes: Routes = [
    { path: '', component: CategoriaComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        
        // material
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
    ],
    declarations: [ CategoriaComponent ],
    providers: [],
})
export class CategoriaModule { }
