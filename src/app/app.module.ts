import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { CoffeeComponent } from './coffee/coffee.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { TableStatusPipe } from './pipes/table-status.pipe';
import { TableService } from './services/table.service';


@NgModule({
  declarations: [
    CoffeeComponent,
    TableComponent,
    LoginComponent,
    TableStatusPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TableService
  ],
    bootstrap: [CoffeeComponent]
})
export class AppModule { }
