import { Injectable } from "@angular/core";
import { ITable } from "../interfaces/ITable";

@Injectable()
export class TableService {
    tables: ITable[];
    constructor (){

    }
    getTables(){
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
        },
        {
            name: 'Table 5',
            orderName: 'Thien',
            totalDishes: 3,
            status: 1
        }]
    }

    addTable(table: ITable) {
        this.tables.push(table)
    }

    changeStatusTable(name: string, status: number) {
        const tableIndex = this.tables.findIndex(table => table.name === name)
        if(tableIndex !== -1) {
            this.tables[tableIndex].status = status
        }
    }
}