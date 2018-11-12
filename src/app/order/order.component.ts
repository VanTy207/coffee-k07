import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITable } from '../interfaces/ITable';
import { TableService } from '../core/services/table.service';
import { IFoodFilter } from '../interfaces/IFoodFilter';
import { IFood } from '../interfaces/IFood';
import { FoodService } from '../core/services/food.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  table: ITable;
  filters: IFoodFilter[];
  foods: IFood[];
  constructor(private route: ActivatedRoute,
    private tableService: TableService,
    private foodService: FoodService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.tableId;
    this.tableService.getTableById(id).subscribe(data => {
      this.table = data;
    });

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
    
    this.foodService.getFoods().subscribe(data => {
      this.foods = data;
    })
  }

  selectFilter(filter: IFoodFilter) {
    this.filters = this.filters.map(f => {
      f.active = false;
      return f;
    });
    filter.active = true;
  }

}
