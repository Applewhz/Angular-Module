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
import { DurationConverterHoursPipe } from './utils/DurationConverterHours';
import { DurationConverterMinutesPipe } from './utils/DurationConverterMinutes';
import { DateConverterPipe } from './utils/DateConverter';


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
  declarations: [COMPONENTS, EmailValidatorDirective, DurationConverterHoursPipe, DurationConverterMinutesPipe, DateConverterPipe],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [COMPONENTS, DurationConverterHoursPipe, DurationConverterMinutesPipe, DateConverterPipe]
})
export class SharedModule { }
