import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { LayoutComponent } from './shared/layout/layout.component';
import { TableModule } from './table/table.module';
import { SharedModule } from './shared/shared.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderSummaryComponent } from './order/order-summary/order-summary.component';
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    SharedModule,
    OrderModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
