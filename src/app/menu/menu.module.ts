import {OverlayModule} from '@angular/cdk/overlay';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {MenuComponent} from './menu.component';
import {CustomInputModule} from '../shared/components/custom-input/custom-input.module';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    CustomInputModule,
    OverlayModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule {
}
