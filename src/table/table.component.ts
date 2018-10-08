import { Component } from "@angular/core";

@Component({
    selector: 'app-table',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.css']
})
export class TableComponent {
    name: string;
    orderName: string;
    totalDishes: number; 
    status: string;

    constructor() {
        this.name = 'TABLE 1';
        this.orderName = 'Mr.Quynh';
        this.status = 'Closed';
        this.totalDishes = 4;
        this.expiredTable();
    }

    expiredTable() {
        setTimeout(() => {
            this.status = 'Open'
        }, 3000)
    } 
}