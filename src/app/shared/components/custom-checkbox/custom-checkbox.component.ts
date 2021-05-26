import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: 'custom-checkbox.component.html',
  styleUrls: ['custom-checkbox.component.scss']
})
export class CustomCheckboxComponent {
  @Input()
  public label: string = 'label';
  public control: FormControl = new FormControl(false);
}
