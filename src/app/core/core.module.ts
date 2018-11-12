import { NgModule, ModuleWithProviders } from '@angular/core';
import { TableService } from './services/table.service';
import { HttpClientModule } from '@angular/common/http';
import { FoodService } from './services/food.service';


@NgModule({
    imports: [HttpClientModule],
    exports: [],
    declarations: [],
    providers: [
    ],
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                TableService,
                FoodService
            ]
        };
    }

}
