import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IFood } from '../../interfaces/IFood';
import { Observable } from 'rxjs';

@Injectable()
export class FoodService {
    constructor(private httpClient: HttpClient) { }

    getFoods(): Observable<IFood[]> {
        return this.httpClient.get(`http://lexuanquynh.com:8080/foods`)
            .pipe(map((res: any) => {
                return res.rows.map((food: any) => {
                    return {
                        id: food.id,
                        name: food.name,
                        price: food.price,
                        cover: food.pictures[0]
                    } as IFood
                })
            }))
    }
}