import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  errorMessage!: string;

  constructor() { }

  ngOnInit() {
  }

  // login(loginForm: NgForm) {
  //   if (loginForm && loginForm.valid) {
  //     const userEmail = loginForm.form.value.email;
  //     const password = loginForm.form.value.password;
  //     console.log(userEmail, password);
  //   } else {
  //     this.errorMessage = 'Please enter an email and password.';
  //   }
  // }
  
  onSubmit(value:any) {
    // this.submitted = true
    console.log(value)
  }
}
