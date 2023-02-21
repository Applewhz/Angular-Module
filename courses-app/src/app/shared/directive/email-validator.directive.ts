import { Directive } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { createEmailValidation } from '../utils/EmailValidator';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true
  }]
})
export class EmailValidatorDirective implements Validator{

  validator: ValidatorFn;

  constructor() {
    this.validator = createEmailValidation;
  }

  validate(control: FormControl): ValidationErrors | null {
    return createEmailValidation(control)
  }

}
