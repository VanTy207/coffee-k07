import { Component } from '@angular/core';

@Component({
    selector: 'coffee-root',
    templateUrl: 'coffee.component.html',
    styleUrls: ['coffee.component.css']
})
export class CoffeeComponent {
    tables: Array<any>;
    tabs: any[] = [
        { name: 'menu', icon: 'assets/coffee-beans.png' },
        { name: 'order', icon: 'assets/shopping-cart.png'}, 
        { name: 'profile', icon: 'assets/avatar.png' },
    ];
    constructor() {
        this.tables = [{
            name: 'Table 1',
            orderName: 'Quynh',
            totalDishes: 5,
            status: 'Prepare'
        },{
            name: 'Table 2',
            orderName: 'Tuan',
            totalDishes: 3,
            status: 'Ordered'
        },
        {
            name: 'Table 3',
            orderName: 'Tuan 1',
            totalDishes: 3,
            status: 'Ordered'
        },
        {
            name: 'Table 4',
            orderName: 'Tuan 2',
            totalDishes: 3,
            status: 'Ordered'
        }];
    }

    clickTab(item){
        alert('Clicked ' + item.name);
    }
}