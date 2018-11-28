import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { MenuRoutingModule } from './menu.routing';
import { FoodComponent } from './food/food.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { RouterModule } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { A1Component } from './a1/a1.component';

@NgModule({
    imports: [SharedModule, RouterModule],
    exports: [],
    declarations: [MenuComponent, FoodComponent, FoodDetailComponent, AComponent, BComponent, A1Component],
    providers: [],
})
export class MenuModule { }
