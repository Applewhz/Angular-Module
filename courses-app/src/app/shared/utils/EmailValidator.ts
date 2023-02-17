import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const createEmailValidation: ValidatorFn = () => {
    return (control: FormControl) => {
        if (control.value != null && control.value !== '') {
          let isValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(control.value);
          if (isValid) {
            return null;
          } else {
            return {
              emailvalidator: { valid: false }
            };
          }
        } else {
          return null;
        }
    }
}