import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './components/modal/modal.component';
import {
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  CourseCardComponent,
  LoginFormComponent,
  RegistrationFormComponent,
  CourseFormComponent
} from "./components";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EmailValidatorDirective } from './directive/email-validator.directive';

const COMPONENTS = [
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  ModalComponent,
  CourseCardComponent,
  LoginFormComponent,
  RegistrationFormComponent,
  CourseFormComponent
];

@NgModule({
  declarations: [COMPONENTS, EmailValidatorDirective],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [COMPONENTS]
})
export class SharedModule { }
