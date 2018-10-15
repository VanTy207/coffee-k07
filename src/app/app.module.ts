import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { CoffeeComponent } from './coffee/coffee.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    CoffeeComponent,
    TableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
    bootstrap: [CoffeeComponent]
})
export class AppModule { }
