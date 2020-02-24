import API from '../api';

import { COURSES_SUCCESS, COURSES_REQUEST, COURSES_ERROR, LESSONS_SUCCESS } from '../types/coursesData';

export const CoursesSuccess = courses => {
  return { type: COURSES_SUCCESS, payload: courses }
};

export const CoursesWithLessonsSuccess = (courses, lessons) => {
  return { type: LESSONS_SUCCESS, payload: { courses, lessons } }
};

export const CoursesRequest = () => {
  return { type: COURSES_REQUEST }
}

export const CoursesError = errorMessage => {
  return { type: COURSES_REQUEST, errorMessage }
}

export const getCourses = () => {
  return dispatch => {
    dispatch(CoursesRequest());
    API.getCourses()
      .then(courses => dispatch(CoursesSuccess(courses.data)))
      .catch(err => dispatch(CoursesError(err.message)));
  }
};

export const getCoursesWithLessons = () => {
  return dispatch => {
    dispatch(CoursesRequest());
    API.getCoursesWithLessons()
      .then(resp => dispatch(CoursesWithLessonsSuccess(resp.courses, resp.lessons)))
      .catch(err => dispatch(CoursesError(err.message)));
  }
};
