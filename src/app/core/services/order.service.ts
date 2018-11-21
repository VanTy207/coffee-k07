import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFood } from '../../interfaces/IFood';

@Injectable()
export class OrderService {
    private _totalAmount = new BehaviorSubject(0);
    get totalAmount () {
        return this._totalAmount.asObservable();
    }
    
    private _foodOrdered: BehaviorSubject<IFoodOrdered[]> = new BehaviorSubject(new Array());
    get foodOrdered () {
        return this._foodOrdered.asObservable();
    }
    
    constructor() { }

    addFood(food: IFood){
        const foods = this._foodOrdered.getValue();
        const index = foods.findIndex(f => f.food.id === food.id);
        if(index > 0) {
            foods[index].quality++;
        } else {
            foods.push({
                food: food,
                quality: 1
            });
        }

        const total = this.calcTotal(foods);
        this._totalAmount.next(total);
        this._foodOrdered.next(foods);
    }

    removeFood(){

    }

    private calcTotal(foods: IFoodOrdered[]) {
        let total: number = 0;
        for(let item of foods) {
            total = total + item.food.price * item.quality;
        }
        return total;
    }
}

interface IFoodOrdered {
    food: IFood,
    quality: number
}