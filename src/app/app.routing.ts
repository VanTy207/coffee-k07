import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'tables', pathMatch: 'full' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'tables', loadChildren: './table/table.module#TableModule' },
    { path: 'order', loadChildren: './order/order.module#OrderModule' },
    { path: 'menu', loadChildren: './menu/menu.module#MenuModule' },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [],
    declarations: [],
})
export class AppRoutingModule { }



