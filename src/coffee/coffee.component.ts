import { Component } from '@angular/core';

@Component({
    selector: 'coffee-root',
    templateUrl: 'coffee.component.html',
    styleUrls: ['coffee.component.css']
})
export class CoffeeComponent {
    tables: Array<any>;

    constructor() {
        this. tables = [];
        setTimeout(() => {
            this.tables = ['Table 1', 'Table 2', 'Table 3', 'Table 4', 'Table 5'];
        }, 3000)
    }
}