import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-full-card',
  templateUrl: 'full-card.component.html',
  styleUrls: ['full-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullCardComponent {}
