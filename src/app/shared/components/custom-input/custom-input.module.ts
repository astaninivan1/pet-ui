import {NgModule} from '@angular/core';
import {CustomInputComponent} from './custom-input.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [ReactiveFormsModule],
  exports: [CustomInputComponent],
  declarations: [CustomInputComponent]
})
export class CustomInputModule {}
