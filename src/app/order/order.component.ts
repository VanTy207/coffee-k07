import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITable } from '../interfaces/ITable';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  table: ITable;
  constructor(private route: ActivatedRoute, private tableService: TableService) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.params.tableId);
    this.tableService.getTables();
    this.table = this.tableService.getTableById(id);
  }

}
