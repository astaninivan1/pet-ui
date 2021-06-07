import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {CustomInputModule} from '../shared/components/custom-input/custom-input.module';
import { HeaderComponent } from './header.component';
import {LoginModule} from './login/login.module';
import {MenuModule} from './menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    CustomInputModule,
    LoginModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
