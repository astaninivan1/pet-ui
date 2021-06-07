import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CdkOverlayOrigin} from '@angular/cdk/overlay/overlay-directives';

import {sidePanelAnimation} from './side-panel.animation';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [sidePanelAnimation]
})
export class SidePanelComponent {
  public isOpen: boolean = false;
}
