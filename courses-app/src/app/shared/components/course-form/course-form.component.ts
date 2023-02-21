import { Component } from '@angular/core';
import {
  FormArray,
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
      authors: this.fb.array(['Author 1', 'Author 2']),
      duration: [0, [Validators.required, Validators.min(0)]],
    })
  }
  
  // ngOnInit() {
  //   this.courseForm = this.fb.group({
  //     title: ['', [Validators.required, Validators.minLength(10)]],
  //     description: ['', [Validators.required, Validators.minLength(10)]],
  //     authors: this.fb.array(['Author 1', 'Author 2']),
  //     duration: ['', [Validators.required, Validators.min(0)]],
  //   })
  // }
  onSubmit(value:any) {
    // this.submitted = true
    // console.log('here', this.show)
    // console.log('here',this.authorsArray.get('authors'))
    console.log(value)
  }

  onCancel() {
    console.log('GO BACK')
  }

  onCancelAuthor() {
    console.log('Delete author?')
  }

  getHours = (duration: number) => {
    const value =  duration / 60
    if(value < 10){
      return '0' + Math.floor(value)
    }
    return Math.floor(value)
  }
  getMinutes = (duration: number) => {
    const value =  duration % 60
    if(value < 10){
      return '0' + Math.floor(value)
    }
    return Math.floor(value)
  }

  get courseFormControl() {
    return this.courseForm.controls;
  }

}
