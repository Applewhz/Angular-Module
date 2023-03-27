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

export const requestAllCourses = createAction(
  REQUEST_ALL_COURSES,
);

export const requestAllCoursesSuccess = createAction(
    REQUEST_ALL_COURSES_SUCCESS,
)

export const requestAllCoursesFailure = createAction(
  REQUEST_ALL_COURSES_FAILURE,
)

export const requestSingleCourse = createAction(
    REQUEST_SINGLE_COURSE,
);
  
export const requestSingleCourseSuccess = createAction(
    REQUEST_SINGLE_COURSE_SUCCESS,
)
  
export const requestSingleCourseFailure = createAction(
    REQUEST_SINGLE_COURSE_FAILURE,
)

export const requestFilteredCourses = createAction(
    REQUEST_FILTERED_COURSES,
);
  
export const requestFilteredCoursesSuccess = createAction(
    REQUEST_FILTERED_COURSES_SUCCESS,
)
  
export const requestFilteredCoursesFailure = createAction(
    REQUEST_FILTERED_COURSES_FAILURE,
)

export const requestDeleteCourse = createAction(
    REQUEST_DELETE_COURSE,
);
  
export const requestDeleteCourseSuccess = createAction(
    REQUEST_DELETE_COURSE_SUCCESS,
)
  
export const requestDeleteCourseFailure = createAction(
    REQUEST_DELETE_COURSE_FAILURE,
)

export const requestEditCourse = createAction(
    REQUEST_EDIT_COURSE,
);
  
export const requestEditCourseSuccess = createAction(
    REQUEST_EDIT_COURSE_SUCCESS,
)
  
export const requestEditCourseFailure = createAction(
    REQUEST_EDIT_COURSE_FAILURE,
)

export const requestCreateCourse = createAction(
    REQUEST_CREATE_COURSE,
);
  
export const requestCreateCourseSuccess = createAction(
    REQUEST_CREATE_COURSE_SUCCESS,
)
  
export const requestCreateCourseFailure = createAction(
    REQUEST_CREATE_COURSE_FAILURE,
)