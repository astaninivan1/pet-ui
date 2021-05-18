import {ChangeDetectionStrategy, Component, forwardRef, Input, Provider} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';

const CONTROL_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  multi: true,
  useExisting: forwardRef(() => CustomInputComponent)
}

@Component({
  selector: 'app-custom-input',
  templateUrl: 'custom-input.component.html',
  styleUrls: ['custom-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CONTROL_ACCESSOR]
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input()
  public placeholder: string;

  @Input()
  public set disabled(_: boolean) {
    this.setDisabled(_);
  }

  @Input()
  public set required(_: boolean) {
    this.setRequired(_);
  }

  @Input()
  public clearBtn: boolean = true;

  public id: symbol = Symbol('input');
  public control: FormControl = new FormControl('');

  private _onChangeCallback: (_: string) => void = () => {};

  private setDisabled(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }

  private setRequired(setRequired: boolean): void {
    setRequired ? this.control.setValidators(Validators.required) : this.control.clearValidators();
    this.control.updateValueAndValidity();
  }

  public onChange(): void {
    this._onChangeCallback(this.control.value);
  }

  public registerOnChange(fn: (_: string) => void): void {
    if (this._onChangeCallback) {
      this._onChangeCallback = fn;
    }
  }

  public registerOnTouched(fn: any): void {
  }

  public writeValue(newValue: string): void {
    this.control.setValue(newValue);
  }
}
