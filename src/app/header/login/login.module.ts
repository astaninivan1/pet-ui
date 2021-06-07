import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {CustomInputModule} from '../../shared/components/custom-input/custom-input.module';
import {SidePanelModule} from '../../shared/components/side-panel/side-panel.module';
import {LoginComponent} from './login.component';

@NgModule({
  imports: [
    CommonModule,
    SidePanelModule,
    CustomInputModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
