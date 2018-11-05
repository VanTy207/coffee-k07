import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
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
