import { Component, Input } from '@angular/core';
import { Course } from './coursesType';
import { mockedCourseList } from './mocks';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  // @Input() Courses!: Course
  Courses: Course[] = mockedCourseList
  @Input() Editable!: boolean
  // @Input() Courses :
}
