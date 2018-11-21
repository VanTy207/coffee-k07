import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../core/services/order.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  quatity: number = 0;
  totalAmount: number = 0;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.totalAmount.subscribe(data => {
      this.totalAmount = data;
    })

    this.orderService.foodOrdered.subscribe(data => {
      this.quatity = data.length;
    })
  }

}
