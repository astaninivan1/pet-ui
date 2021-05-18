import {Route, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import { ShortCardComponent } from './short-card/short-card.component';
import {FullCardComponent} from './full-card/full-card.component';
import {TasksComponent} from './tasks.component';
import {CustomInputModule} from '../shared/components/custom-input/custom-input.module';
import {MatButtonModule} from '@angular/material/button';

const routes: Route[] = [
  {
    path: '',
    component: TasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, CustomInputModule, MatButtonModule],
  declarations: [TasksComponent, ShortCardComponent, FullCardComponent],
  bootstrap: [TasksComponent]
})
export class TasksModule {
}
