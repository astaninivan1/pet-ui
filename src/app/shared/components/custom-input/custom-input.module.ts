import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {CustomInputComponent} from './custom-input.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [MatIconModule, ReactiveFormsModule],
  exports: [CustomInputComponent],
  declarations: [CustomInputComponent]
})
export class CustomInputModule {}
