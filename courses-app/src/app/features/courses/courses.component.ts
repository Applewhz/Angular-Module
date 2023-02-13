import { Component, Input } from '@angular/core';
import { Course } from './coursesType';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  @Input() Courses!: Course
  @Input() Editable!: boolean
  // @Input() Courses :
}
