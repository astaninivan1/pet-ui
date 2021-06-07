import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidePanelComponent } from './side-panel.component';
import {OverlayModule} from '@angular/cdk/overlay';



@NgModule({
  declarations: [
    SidePanelComponent
  ],
  exports: [
    SidePanelComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ]
})
export class SidePanelModule { }
