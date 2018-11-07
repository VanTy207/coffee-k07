import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports: [SharedModule],
    exports: [LoginComponent],
    declarations: [LoginComponent],
    providers: [],
})
export class AuthModule { }
