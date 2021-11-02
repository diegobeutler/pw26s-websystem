import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material
import { MatIconModule } from '@angular/material/icon';

// aplicação
import { HomepageComponent } from './homepage.component';
import { ArtigosRowComponent } from './components/artigos-row/artigos-row.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: HomepageComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),

        // material
        MatIconModule,
    ],
    declarations: [
        HomepageComponent,
        ArtigosRowComponent,
    ],
    providers: [],
})
export class HomepageModule { }
