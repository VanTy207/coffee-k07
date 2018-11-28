import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { CommonModule } from '@angular/common';
import { TableStatusPipe } from './pipes/table-status.pipe';
import { SharedModule } from '../shared/shared.module';
import { TableRoutingModule } from './table.routing';

@NgModule({
    imports: [
        SharedModule,
        TableRoutingModule
    ],
    exports: [
        CoffeeComponent
    ],
    declarations: [
        TableComponent,
        CoffeeComponent,
        TableStatusPipe
    ],
    providers: [],
})
export class TableModule { }
