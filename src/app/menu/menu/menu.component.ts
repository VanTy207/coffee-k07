import { Component, OnInit } from '@angular/core';
import { IFoodFilter } from '../../interfaces/IFoodFilter';
import { FoodService } from '../../core/services/food.service';
import { IFood } from '../../interfaces/IFood';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  filters: IFoodFilter[];
  foods: IFood[];
  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.filters = [{
      icon: 'assets/coffee',
      title: 'Coffee',
      active: true
    }, {
      icon: 'assets/tea-bag',
      title: 'Tea'
    },
    {
      icon: 'assets/coffee',
      title: 'Coffee',
    }, {
      icon: 'assets/tea-bag',
      title: 'Tea'
    },
    {
      icon: 'assets/coffee',
      title: 'Coffee',
    }, {
      icon: 'assets/tea-bag',
      title: 'Tea'
    },
    {
      icon: 'assets/coffee',
      title: 'Coffee',
    }, {
      icon: 'assets/tea-bag',
      title: 'Tea'
    }];
    // this.foodService.getFoods().subscribe(data => {
    //   this.foods = data;
    // })
  }

 
}
