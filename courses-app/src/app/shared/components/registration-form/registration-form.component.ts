import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorDirective } from '../../directive/email-validator.directive';
import { createEmailValidation } from '../../utils/EmailValidator';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  show = false
  constructor(
    // private fb: FormBuilder,
    // private customValidator: EmailValidatorDirective
  ) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.min(6)]),
      email: new FormControl('', createEmailValidation(this.registerForm)),
      password: new FormControl('', Validators.required)
    })
  }
  onSubmit(value:any) {
    // this.submitted = true
    console.log('here', this.show)
    console.log(value)
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

}
