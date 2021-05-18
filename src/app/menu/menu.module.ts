import {NgModule} from '@angular/core';
import {MenuComponent} from './menu.component';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CustomInputModule} from '../shared/components/custom-input/custom-input.module';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule, CustomInputModule],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class MenuModule {}
