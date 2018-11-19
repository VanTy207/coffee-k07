import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

    addFood(){

    }

    removeFood(){

    }
}

interface IFoodOrdered {
    food: any,
    quality: number
}