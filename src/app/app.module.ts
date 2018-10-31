import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CoffeeComponent } from './coffee/coffee.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { TableStatusPipe } from './pipes/table-status.pipe';
import { TableService } from './services/table.service';
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './order/order.component';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    CoffeeComponent,
    TableComponent,
    LoginComponent,
    TableStatusPipe,
    HeaderComponent,
    OrderComponent,
    LayoutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'tables', pathMatch: 'full'},
      {path: 'tables', component: CoffeeComponent },
      {path: 'order/:tableId', component: OrderComponent },
      {path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [
    TableService
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
