import { NgModule, ModuleWithProviders } from '@angular/core';
import { TableService } from './services/table.service';


@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        TableService
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
