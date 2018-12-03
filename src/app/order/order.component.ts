import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITable } from '../interfaces/ITable';
import { TableService } from '../core/services/table.service';
import { IFoodFilter } from '../interfaces/IFoodFilter';
import { IFood } from '../interfaces/IFood';
import { FoodService } from '../core/services/food.service';
import { OrderService } from '../core/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  table: ITable;
  filters: IFoodFilter[];
  foods: IFood[];
  customer: string;
  constructor(private route: ActivatedRoute,
    private tableService: TableService,
    private foodService: FoodService,
    private orderSerivce: OrderService,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params.tableId;
    this.tableService.getTableById(id).subscribe(data => {
      this.table = data;
      if (this.table.bill && this.table.bill.status > 0) {
        this.customer = this.table.bill.customer;
        this.orderSerivce.loadOrder(this.table.bill);
      }
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
    }];
    this.foodService.getFoods().subscribe(data => {
      this.foods = data;
      if (this.table.bill) {
        this.foods.map(item => {
          const existsItem = this.table.bill.details.find(i => i.food === item.id);
          if (existsItem) {
            item.quatity = existsItem.quatity;
          } else {
            item.quatity = 0;
          }
        });
      }
    });
  }

  selectFilter(filter: IFoodFilter) {
    this.filters = this.filters.map(f => {
      f.active = false;
      return f;
    });
    filter.active = true;
  }

  orderNow(data: any) {
    if (!this.table.bill || this.table.bill.status === 0) {
      this.orderSerivce.createOrder(this.table.id,
        this.customer,
        data.totalAmount,
        1,
        data.foodOrdered).subscribe((res: any) => {
          console.log(res);
          this.router.navigate(['order', 'thankyou', { id: res.id, tableId: this.table.id}]);
        });
    } else {
      this.orderSerivce.updateOrder(this.table.bill.id, this.table.id,
        this.customer,
        data.totalAmount,
        1,
        data.foodOrdered).subscribe((res: any) => {
          console.log(res);
          this.router.navigate(['order', 'thankyou', { id: res.id, tableId: this.table.id}]);
        });
    }
  }

}
