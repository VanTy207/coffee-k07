import { NgModule, ModuleWithProviders } from '@angular/core';
import { TableService } from './services/table.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FoodService } from './services/food.service';
import { AuthService } from './services/auth.service';
import { HeaderInterceptor } from './services/http.interceptor';


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
                FoodService,
                AuthService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HeaderInterceptor,
                    multi: true
                }
            ]
        };
    }

}
