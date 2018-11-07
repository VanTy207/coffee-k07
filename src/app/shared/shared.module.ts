import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    exports: [
        CommonModule, FormsModule, HeaderComponent, LayoutComponent, PageNotFoundComponent
    ],
    declarations: [
        HeaderComponent,
        LayoutComponent,
        PageNotFoundComponent
    ],
    providers: [],
})
export class SharedModule { }
