import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CardModel} from '../shared/model/card.model';

@Component({
  selector: 'app-full-card',
  templateUrl: 'full-card.component.html',
  styleUrls: ['full-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullCardComponent {
  @Input()
  public card: CardModel = new CardModel();
}
