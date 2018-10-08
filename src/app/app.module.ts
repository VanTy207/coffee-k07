import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoffeeComponent } from '../coffee/coffee.component';
import { TableComponent } from '../table/table.component';


@NgModule({
  declarations: [
    CoffeeComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
    bootstrap: [CoffeeComponent]
})
export class AppModule { }
