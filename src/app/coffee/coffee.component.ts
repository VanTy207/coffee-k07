import { Component, OnInit } from '@angular/core';
import { ITable } from '../interfaces/ITable';
import { ITab } from '../interfaces/ITab';

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
    constructor() {
    }

    ngOnInit() {
        this.tables = [{
            name: 'Table 1',
            orderName: 'Quynh',
            totalDishes: 5,
            status: 2
        },{
            name: 'Table 2',
            orderName: 'Tuan',
            totalDishes: 3,
            status: 1
        },
        {
            name: 'Table 3',
            orderName: 'Tuan 1',
            totalDishes: 3,
            status: 3
        },
        {
            name: 'Table 4',
            orderName: 'Tuan 2',
            totalDishes: 3,
            status: 1
        }];

        // setTimeout(() => {
        //     this.tables.pop();
        // }, 3000);
    }
    
    clickTab(item: ITab): void{
        alert('Clicked ' + item.name);
    }

    onTapTable(table: ITable) {
        this.currentTable = table.name;
    }
}