import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// aplicação
import { ToolbarComponent } from './toolbar.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,

        // material
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
    ],
    exports: [ToolbarComponent],
    declarations: [ToolbarComponent],
    providers: [],
})
export class ToolbarModule { }
