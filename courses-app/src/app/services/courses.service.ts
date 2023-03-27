import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Course } from '../features/courses/coursesType';
import { AllCourses } from './courses-store.service';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  
  constructor(private http: HttpClient) { }
  
  baseURL = "http://localhost:4000/"

  getAll() {
    return this.http.get<AllCourses>(this.baseURL+'courses/all')
      .pipe(map(response => {return response}))
  }

  createCourse(data: any) {
    return this.http.post(this.baseURL+'courses/add', data)
  }

  editCourse(id:number, data: any) {
    return this.http.put(this.baseURL+`courses/${id}`, data)
  }

  getCourse(id: number) {
    return this.http.get<Course>(this.baseURL+`courses/${id}`)
      .pipe(map(response => {return response}))
  }

  deleteCourse(id:number) {
    return this.http.delete(this.baseURL+`courses/${id}`)
  }
}
