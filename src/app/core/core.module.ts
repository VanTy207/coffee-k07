import { NgModule, ModuleWithProviders } from '@angular/core';
import { TableService } from './services/table.service';
import { HttpClientModule } from '@angular/common/http';


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
                TableService
            ]
        };
    }

}
