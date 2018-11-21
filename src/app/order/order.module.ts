import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { FoodFilterComponent } from './food-filter/food-filter.component';
import { FoodComponent } from './food/food.component';
import { SharedModule } from '../shared/shared.module';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@NgModule({
    imports: [SharedModule],
    exports: [OrderComponent, FoodFilterComponent, FoodComponent],
    declarations: [OrderComponent, FoodFilterComponent, FoodComponent, OrderSummaryComponent],
    providers: [],
})
export class OrderModule { }
