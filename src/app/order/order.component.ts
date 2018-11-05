import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITable } from '../interfaces/ITable';
import { TableService } from '../services/table.service';
import { IFoodFilter } from '../interfaces/IFoodFilter';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  table: ITable;
  filters: IFoodFilter[];
  constructor(private route: ActivatedRoute, private tableService: TableService) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.params.tableId);
    this.tableService.getTables();
    this.table = this.tableService.getTableById(id);

    this.filters = [{
      icon: 'assets/coffee',
      title: 'Coffee',
      active: true
    }, {
      icon: 'assets/tea-bag',
      title: 'Tea'
    },
    {
      icon: 'assets/coffee',
      title: 'Coffee',
    }, {
      icon: 'assets/tea-bag',
      title: 'Tea'
    },
    {
      icon: 'assets/coffee',
      title: 'Coffee',
    }, {
      icon: 'assets/tea-bag',
      title: 'Tea'
    },
    {
      icon: 'assets/coffee',
      title: 'Coffee',
    }, {
      icon: 'assets/tea-bag',
      title: 'Tea'
    }]
  }

  selectFilter(filter: IFoodFilter) {
    this.filters = this.filters.map(f => {
      f.active = false;
      return f;
    });
    filter.active = true;
  }

}
