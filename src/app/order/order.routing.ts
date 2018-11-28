import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';
import { AuthGuard } from '../core/services/auth.guard.service';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
    {path: 'thankyou', component: ThankyouComponent},
    {path: ':tableId', component: OrderComponent, canActivate: [AuthGuard] },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class OrderRoutingModule { }