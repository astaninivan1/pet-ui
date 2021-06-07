import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {SidePanelModule} from '../../shared/components/side-panel/side-panel.module';
import {MenuComponent} from './menu.component';

@NgModule({
  imports: [
    CommonModule,
    SidePanelModule
  ],
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule {
}
