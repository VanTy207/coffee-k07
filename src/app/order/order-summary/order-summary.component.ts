import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderService } from '../../core/services/order.service';
import { IFoodOrdered } from '../../interfaces/IFoodOrdered';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  isShowDetails: Boolean = false;
  quatity: Number = 0;
  totalAmount: Number = 0;
  foodsOrdered: IFoodOrdered[];
  @Output() onOrderNow = new EventEmitter<any>();
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.totalAmount.subscribe(data => {
      this.totalAmount = data;
    });

    this.orderService.foodOrdered.subscribe(data => {
      this.quatity = data.length;
      this.foodsOrdered = data;
    });
  }

  orderNow() {
    this.onOrderNow.emit({totalAmount: this.totalAmount, foodOrdered: this.foodsOrdered});
  }

}
