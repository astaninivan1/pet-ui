import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {TasksComponent} from './tasks.component';

const routes: Route[] = [
  {
    path: '',
    component: TasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [TasksComponent]
})
export class TasksModule {
}
