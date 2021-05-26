import {NgModule} from '@angular/core';
import {CustomCheckboxComponent} from './custom-checkbox.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule],
  declarations: [CustomCheckboxComponent],
  exports: [CustomCheckboxComponent],
})
export class CustomCheckboxModule {}
