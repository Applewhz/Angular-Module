import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const createEmailValidation: ValidatorFn = () => {
    return (control:AbstractControl): ValidationErrors | null => {
        const value = control.value

        if(!value){
            return null
        }

        const validEmail = 'something'

        return validEmail ? null : {emailValid: 'EMAIL IS NOT VALID'}
    }

}