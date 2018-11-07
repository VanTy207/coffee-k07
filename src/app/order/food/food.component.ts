import { Component, OnInit, Input } from '@angular/core';
import { IFood } from '../../interfaces/IFood';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  @Input() food: IFood;
  quatity: number = 0;
  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.quatity++;
  }

  decrease() {
    if(this.quatity === 0) return;
    this.quatity--;
  }
}
