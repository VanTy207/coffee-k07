import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeeComponent } from './table/coffee/coffee.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './core/services/auth.guard.service';

const routes: Routes = [
    {path: '', redirectTo: 'tables', pathMatch: 'full'},
    {path: 'login', component: LoginComponent },
    {path: 'tables', component: CoffeeComponent, canActivate: [AuthGuard] },
    {path: 'order/:tableId', component: OrderComponent, canActivate: [AuthGuard] },
    {path: '**', component: PageNotFoundComponent }
  ]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [], 
    declarations: [],
})
export class AppRoutingModule { }



