import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { FoodComponent } from './food/food.component';
import { SharedModule } from '../shared/shared.module';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderRoutingModule } from './order.routing';
import { ThankyouComponent } from './thankyou/thankyou.component';

@NgModule({
    imports: [SharedModule, OrderRoutingModule],
    exports: [OrderComponent, FoodComponent],
    declarations: [OrderComponent, FoodComponent, OrderSummaryComponent, ThankyouComponent],
    providers: [],
})
export class OrderModule { }
