import { createAction, props } from '@ngrx/store';

//All Courses
export const REQUEST_ALL_COURSES = '[Courses Page] All Courses';
export const REQUEST_ALL_COURSES_SUCCESS = '[Courses Page] Get All Courses Success';
export const REQUEST_ALL_COURSES_FAILURE = '[Courses Page] Get All Courses Failure';
//Single Course
export const REQUEST_SINGLE_COURSE = '[Courses Page] Single Course';
export const REQUEST_SINGLE_COURSE_SUCCESS = '[Courses Page] Get single Course Success';
export const REQUEST_SINGLE_COURSE_FAILURE = '[Courses Page] Get single Course Failure';
//Filtered Courses
export const REQUEST_FILTERED_COURSES = '[Courses Page] Filtered Courses';
export const REQUEST_FILTERED_COURSES_SUCCESS = '[Courses Page] Get Filtered Courses Success';
export const REQUEST_FILTERED_COURSES_FAILURE = '[Courses Page] Get Filtered Courses Failure';
//Delete Course
export const REQUEST_DELETE_COURSE = '[Courses Page] Delete Course';
export const REQUEST_DELETE_COURSE_SUCCESS = '[Courses Page] Get Delete Course Success';
export const REQUEST_DELETE_COURSE_FAILURE = '[Courses Page] Get Delete Course Failure';
//Edit Course
export const REQUEST_EDIT_COURSE = '[Courses Page] Edit Course';
export const REQUEST_EDIT_COURSE_SUCCESS = '[Courses Page] Get Edit Course Success';
export const REQUEST_EDIT_COURSE_FAILURE = '[Courses Page] Get Edit Course Failure';
//Create Course
export const REQUEST_CREATE_COURSE = '[Courses Page] Create Course';
export const REQUEST_CREATE_COURSE_SUCCESS = '[Courses Page] Get Create Course Success';
export const REQUEST_CREATE_COURSE_FAILURE = '[Courses Page] Get Create Course Failure';

export const allCourses = createAction(
  REQUEST_ALL_COURSES,
);

export const allCoursesSuccess = createAction(
    REQUEST_ALL_COURSES_SUCCESS,
)

export const allCoursesFailure = createAction(
  REQUEST_ALL_COURSES_FAILURE,
)

export const singleCourse = createAction(
    REQUEST_SINGLE_COURSE,
);
  
export const singleCourseSuccess = createAction(
    REQUEST_SINGLE_COURSE_SUCCESS,
)
  
export const singleCourseFailure = createAction(
    REQUEST_SINGLE_COURSE_FAILURE,
)

export const filteredCourses = createAction(
    REQUEST_FILTERED_COURSES,
);
  
export const filteredCoursesSuccess = createAction(
    REQUEST_FILTERED_COURSES_SUCCESS,
)
  
export const filteredCoursesFailure = createAction(
    REQUEST_FILTERED_COURSES_FAILURE,
)

export const deleteCourse = createAction(
    REQUEST_DELETE_COURSE,
);
  
export const deleteCourseSuccess = createAction(
    REQUEST_DELETE_COURSE_SUCCESS,
)
  
export const deleteCourseFailure = createAction(
    REQUEST_DELETE_COURSE_FAILURE,
)

export const editCourse = createAction(
    REQUEST_EDIT_COURSE,
);
  
export const editCourseSuccess = createAction(
    REQUEST_EDIT_COURSE_SUCCESS,
)
  
export const editCourseFailure = createAction(
    REQUEST_EDIT_COURSE_FAILURE,
)

export const createCourse = createAction(
    REQUEST_CREATE_COURSE,
);
  
export const createCourseSuccess = createAction(
    REQUEST_CREATE_COURSE_SUCCESS,
)
  
export const createCourseFailure = createAction(
    REQUEST_CREATE_COURSE_FAILURE,
)