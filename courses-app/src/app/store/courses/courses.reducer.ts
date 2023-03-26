import { Action, createReducer, on } from '@ngrx/store';
import * as courseActions from './courses.actions';
// import * as storage from '../state/storage';
// import { reduce } from 'rxjs/operators';

export interface CoursesState {
  allCourses: any;
  course: any;
  isAllCoursesLoading: boolean;
  isSingleCourseLoading: boolean;
  isSearchState: boolean;
  errorMessage: string
}

export const initialState: CoursesState = {
    allCourses: [],
    course: [],
    isAllCoursesLoading: false,
    isSingleCourseLoading: false,
    isSearchState: false,
    errorMessage: ''
};

export const coursesFeatureKey = "course";

const courseReducer = createReducer(
  initialState,
  on(courseActions.requestAllCourses, (state) => ({...state, isAllCoursesLoading: true})),
  on(courseActions.requestAllCoursesSuccess, (state, result) => ({...state, isAllCoursesLoading: false, allCourses: result})),
  on(courseActions.requestAllCoursesFailure, (state) => ({...state, isAllCoursesLoading: false, errorMessage: 'get all Courses fail'})),
  on(courseActions.requestSingleCourse, (state) => ({...state, isSingleCourseLoading: true})),
  on(courseActions.requestSingleCourseSuccess, (state, result) => ({...state, isSingleCourseLoading: false, course: result})),
  on(courseActions.requestSingleCourseFailure, (state) => ({...state, isSingleCourseLoading: false, errorMessage: 'get single Course fail'})),
  on(courseActions.requestFilteredCourses, (state) => ({...state, isSearchState: true})),
  on(courseActions.requestFilteredCoursesSuccess, (state, result) => ({...state, isSearchState: false, course: result})),
  on(courseActions.requestFilteredCoursesFailure, (state) => ({...state, isSearchState: false, errorMessage: 'get filtered Courses fail'})),
  on(courseActions.requestDeleteCourse, (state) => ({...state, isAllCoursesLoading: true})),
  on(courseActions.requestDeleteCourseSuccess, (state, result) => ({...state, isAllCoursesLoading: false, course: result})),
  on(courseActions.requestDeleteCourseFailure, (state) => ({...state, isAllCoursesLoading: false, errorMessage: 'Delete Course fail'})),
  on(courseActions.requestEditCourse, (state) => ({...state, isAllCoursesLoading: true})),
  on(courseActions.requestEditCourseSuccess, (state, result) => ({...state, isAllCoursesLoading: false, course: result})),
  on(courseActions.requestEditCourseFailure, (state) => ({...state, isAllCoursesLoading: false, errorMessage: 'Edit Course fail'})),
  on(courseActions.requestCreateCourse, (state) => ({...state, isAllCoursesLoading: true})),
  on(courseActions.requestCreateCourseSuccess, (state, result) => ({...state, isAllCoursesLoading: false, course: result})),
  on(courseActions.requestCreateCourseFailure, (state) => ({...state, isAllCoursesLoading: false, errorMessage: 'Create Course fail'})),
);

// export function reducer(state: CoursesState, action: Action): any {
//   return courseReducer(state, action);
// }

// export const coursesReducer = (state: CoursesState, action: Action): CoursesState => reduce(state, action);
// export const getLoggedInUser = (state: CoursesState) => {
//   return {
//     user: state.user,
//     isLoadingSuccess: state.isLoadingSuccess
//   }
// };

// export const userLogin = (state: CoursesState) => {
//   return {
//     user: state.user,
//     result: state.result,
//     isLoading: state.isLoading,
//     isLoadingSuccess: state.isLoadingSuccess
//   }
// };

// export const userSignup = (state: CoursesState) => {
//   return {
//     user: state.user,
//     result: state.result,
//     isLoading: state.isLoading,
//     isLoadingSuccess: state.isLoadingSuccess
//   }
// };