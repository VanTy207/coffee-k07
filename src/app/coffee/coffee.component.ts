import { Component, OnInit } from '@angular/core';
import { ITable } from '../interfaces/ITable';
import { ITab } from '../interfaces/ITab';
import { TableService } from '../services/table.service';

@Component({
    selector: 'coffee-root',
    templateUrl: 'coffee.component.html',
    styleUrls: ['coffee.component.css']
})
export class CoffeeComponent implements OnInit {
    tables: Array<ITable>;
    currentTable: String = 'Default';
    tabs: ITab[] = [
        { name: 'menu', icon: 'assets/coffee-beans.png' },
        { name: 'order', icon: 'assets/shopping-cart.png'}, 
        { name: 'profile', icon: 'assets/avatar.png' },
    ];
    
    constructor(private tableService: TableService) {
    }

    ngOnInit() {
        this.tableService.getTables();
        this.tables = this.tableService.tables;
    }
    
    clickTab(item: ITab): void{
        alert('Clicked ' + item.name);
    }

    onTapTable(table: ITable) {
        this.currentTable = table.name;
    }

    addTable() {
        const newTable: ITable = {
            name: 'New',
            orderName: 'None',
            status: 1,
            totalDishes: 0
        }
        this.tableService.addTable(newTable)
    }

    changeStatus() {
        this.tableService.changeStatusTable('Table 3', 1);
    }
}