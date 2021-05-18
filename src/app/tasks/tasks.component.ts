import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TaskModel} from './shared/model/task.model';

@Component({
  templateUrl: 'tasks.component.html',
  styleUrls: ['tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TasksComponent {
  public tasks: TaskModel[] = this.genTasks();
  public selectedCard: TaskModel = null;

  public genTasks(): TaskModel[] {
    const tasks: TaskModel[] = [];
    for (let i = 0; i < 10; i++) {
      tasks.push(new TaskModel(i, i + ' задача'));
    }
    return tasks;
  }
}
