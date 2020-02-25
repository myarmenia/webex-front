import API from '../api';

import { CoursesRequest, CoursesSuccess, CoursesError, CoursesWithLessonsSuccess } from '../actions/coursesData';

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