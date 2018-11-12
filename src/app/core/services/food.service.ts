import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IFood } from '../../interfaces/IFood';
import { Observable } from 'rxjs';

@Injectable()
export class FoodService {
    token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZTU0ZjRiMzY3OWFjZmY2NTQ1ZmQ0OSI'
        + 'sImlhdCI6MTU0MTc2ODM0OH0.zHhRlIfT-iH4TA8wF0qVXqoPRrGimbLs67racCBo_g4';
    constructor(private httpClient: HttpClient) { }

    getFoods(): Observable<IFood[]> {
        return this.httpClient.get(`http://lexuanquynh.com:8080/foods?access_token=${this.token}`)
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