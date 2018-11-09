import { Injectable } from "@angular/core";
import { ITable } from "../../interfaces/ITable";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class TableService {
    tables: ITable[] = [];
    token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZTU0ZjRiMzY3OWFjZmY2NTQ1ZmQ0OSI'
        + 'sImlhdCI6MTU0MTc2ODM0OH0.zHhRlIfT-iH4TA8wF0qVXqoPRrGimbLs67racCBo_g4';
    constructor(private http: HttpClient) {
    }
    getTables() {
        return this.http.get(`http://lexuanquynh.com:8080/tables?access_token=${this.token}`).pipe(
            map((res: any[]) => {
                this.tables =  res.map(i => {
                    const table: ITable = {
                        id: i.id,
                        name: i.name,
                        status: parseInt(i.status)
                    }
                    return table;
                })
                return this.tables;
            }));
    }

    addTable(table: ITable) {
        this.tables.push(table)
    }

    changeStatusTable(name: string, status: number) {
        const tableIndex = this.tables.findIndex(table => table.name === name)
        if (tableIndex !== -1) {
            this.tables[tableIndex].status = status
        }
    }

    getTableById(id: string) {
        return this.http.get(`http://lexuanquynh.com:8080/tables/${id}?access_token=${this.token}`).pipe(
            map((res: any) => {
                const table: ITable = {
                    id: res.id,
                    name: res.name,
                    status: parseInt(res.status)
                }
                return table;
            }));
    }
}
