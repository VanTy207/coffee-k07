import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/core/services/order.service';
import { FoodService } from 'src/app/core/services/food.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  orderId: string;
  tableId: string;
  order: any;
  constructor(private route: ActivatedRoute,
    private orderService: OrderService,
    private foodSerivce: FoodService,
    private router: Router) { }

  ngOnInit() {
    this.orderId = this.route.snapshot.params.id;
    this.tableId = this.route.snapshot.params.tableId;
    this.orderService.getOrderById(this.orderId).subscribe(res => {
      this.order = res;
      this.foodSerivce.getFoods().subscribe(foods => {
        this.order.details.map(item => {
          const food = foods.find(f => f.id === item.food);
          item.cover = food.cover;
          return item;
        });
      });
    });
  }

  completeOrder() {
    this.orderService.updateStatusOrder(this.orderId, 0).subscribe(res => {
      this.router.navigate(['tables']);
    });
  }

  moreOrder() {
    this.router.navigate(['order/' + this.tableId]);
  }

}
