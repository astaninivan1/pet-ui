import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskModel} from '../shared/model/task.model';

@Component({
  selector: 'app-short-card',
  templateUrl: './short-card.component.html',
  styleUrls: ['./short-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShortCardComponent implements OnInit {
  @Input()
  public task: TaskModel;

  @Output()
  public onSelect: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
