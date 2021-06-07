import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import {getSimpleRoute} from '../shared/functions/simple-route';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(getSimpleRoute(MainComponent))
  ],
  declarations: [
    MainComponent
  ],
})
export class MainModule { }
