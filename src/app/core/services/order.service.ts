import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFood } from '../../interfaces/IFood';
import { IFoodOrdered } from '../../interfaces/IFoodOrdered';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrderService {
    private _totalAmount = new BehaviorSubject(0);
    get totalAmount() {
        return this._totalAmount.asObservable();
    }

    private _foodOrdered: BehaviorSubject<IFoodOrdered[]> = new BehaviorSubject(new Array());
    get foodOrdered() {
        return this._foodOrdered.asObservable();
    }

    constructor(private http: HttpClient) { }

    addFood(food: IFood) {
        const foods = this._foodOrdered.getValue();
        const index = foods.findIndex(f => f.food.id === food.id);
        if (index > -1) {
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

    removeFood() {

    }

    private calcTotal(foods: IFoodOrdered[]) {
        let total: number = 0;
        for (let item of foods) {
            total = total + item.food.price * item.quality;
        }
        return total;
    }

    createOrder(tableId: string,
        customer: string,
        total: Number,
        status: Number,
        details: IFoodOrdered[]) {

        const body = {
            table: tableId,
            customer: customer,
            status: status,
            total: total,
            details: details.map(food => {
                return {
                    food: food.food.id,
                    foodName: food.food.name,
                    quatity: food.quality,
                    amount: food.quality * food.food.price
                }
            })
        }
        return this.http.post('/bills', body);
    }

    updateStatusOrder(billId: string, status: number) {
        const body = {
            status: status
        };
        return this.http.put('/bills/' + billId, body);
    }

    getOrderById(billId: string) {
        return this.http.get('/bills/' + billId);
    }
}
