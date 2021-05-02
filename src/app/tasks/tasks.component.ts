import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CardModel} from './shared/model/card.model';

@Component({
  templateUrl: 'tasks.component.html',
  styleUrls: ['tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TasksComponent {
  public selectedCard: CardModel = null;
}
