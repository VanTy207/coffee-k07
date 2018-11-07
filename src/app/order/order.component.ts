import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITable } from '../interfaces/ITable';
import { TableService } from '../core/services/table.service';
import { IFoodFilter } from '../interfaces/IFoodFilter';
import { IFood } from '../interfaces/IFood';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  table: ITable;
  filters: IFoodFilter[];
  foods: IFood[];
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
    
    this.foods = [{
      id: 1,
      name: 'Capuchino',
      price: 50000,
      cover: 'assets/food-capuchino.jpeg'
    },
    {
      id: 2,
      name: 'Capuchino 1',
      price: 50000,
      cover: 'assets/food-capuchino.jpeg'
    },
    {
      id: 2,
      name: 'Capuchino 2',
      price: 50000,
      cover: 'assets/food-capuchino.jpeg'
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
