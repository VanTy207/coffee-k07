import { Component, Input, OnChanges, OnDestroy, Output, EventEmitter } from "@angular/core";
import { ITable } from "../interfaces/ITable";

@Component({
    selector: 'app-table',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.css']
})
export class TableComponent implements OnChanges, OnDestroy {
    @Input() table: ITable
    @Output() onTable : EventEmitter<ITable> = new EventEmitter();
    constructor() {
    }

    ngOnChanges() {
        console.log('data changed: ' + this.table.name)
    }

    ngOnDestroy() {
        console.log('component destroyed: ' + this.table.name);
    }

    tapOnTable(table: ITable){
        console.log(table);
        this.onTable.emit(table);
    }
}