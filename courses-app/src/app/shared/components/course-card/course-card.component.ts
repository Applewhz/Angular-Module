import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit{
  @Input() Title!: string
  @Input() Description!: string
  @Input() CreationDate!: Date
  @Input() Duration!: number
  @Input() Authors!: string[]
  @Input() editable!: boolean

  constructor() {}

  ngOnInit(): void {}
  getHours = (duration: number) => {
    const value =  duration / 60
    return Math.floor(value)
  }
  getMinutes = (duration: number) => {
    const value =  duration % 60
    return Math.floor(value)
  }

  deleteCourseCard = () => {
    console.log('Delete Task')
  }
  editCourseCard = () => {
    console.log('Edit Task')
  }
  showCourseCard = () => {
    console.log('Show Course')
  }
  //TODO Date Conversion to DD.MM.YYYY
  //DONT UNDERSTNAD
  //Should get button(s) from content projection (<ng-content></ng-content>).
}
