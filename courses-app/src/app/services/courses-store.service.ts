import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Course } from '../features/courses/coursesType';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {
  allcourses!: AllCourses;
  course!: Course
  isLoading: boolean = false
  private isLoading$$: BehaviorSubject<any> = new BehaviorSubject(this.isLoading);
  isLoading$: Observable<boolean> = this.isLoading$$
  private courses$$: BehaviorSubject<any> = new BehaviorSubject(this.allcourses);
  courses$: Observable<boolean> = this.courses$$

  constructor(private courseService: CoursesService) { 
  }

  getAll() {
    this.courseService.getAll().subscribe(
      response => {this.allcourses = response}
    )
  }

  getCourse(id: number){
    this.courseService.getCourse(id).subscribe(
      response => {this.course = response}
    )
  }

  createCourse(data: number){
    this.courseService.createCourse(data).subscribe(
      () => {
        this.courseService.getAll()
      })
  }

  editCourse(id: number, data: any){
    this.courseService.editCourse(id, data).subscribe(
      () => {
        this.courseService.getAll()
      })
  }

  deleteCourse(id: number){
    this.courseService.deleteCourse(id).subscribe(
      () => {
        this.courseService.getAll()
      })
  }
}

export interface AllCourses {
  courses: Course[]
}