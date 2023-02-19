import { Component } from '@angular/core';
import {
  FormBuilder, Validators
} from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {

  courseForm: any
  show = false

  constructor(public fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
    this.courseForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      authors: [''],
      duration: ['', [Validators.required, Validators.min(0)]],
    })
  }

  onSubmit(value:any) {
    // this.submitted = true
    console.log('here', this.show)
    console.log(value)
  }

  onCancel() {
    console.log('GO BACK')
  }

  get courseFormControl() {
    return this.courseForm.controls;
  }
}
