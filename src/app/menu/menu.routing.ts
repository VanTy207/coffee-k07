import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { A1Component } from './a1/a1.component';

const routes: Routes = [
    { path: '', component: MenuComponent },
    { path: 'detail/:id', component: FoodDetailComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class MenuRoutingModule { }