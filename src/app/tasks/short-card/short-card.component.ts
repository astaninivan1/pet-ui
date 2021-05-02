import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CardModel} from '../shared/model/card.model';

@Component({
  selector: 'app-short-card',
  templateUrl: './short-card.component.html',
  styleUrls: ['./short-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShortCardComponent implements OnInit {
  @Output()
  public onSelect: EventEmitter<CardModel> = new EventEmitter<CardModel>();

  public model: CardModel = new CardModel();
  constructor() {
    this.model.title = '3213213';
  }

  ngOnInit(): void {
  }

}
