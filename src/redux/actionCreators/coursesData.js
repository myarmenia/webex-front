import API from "../api";

import store from "../reducers/";

import {
  CoursesRequest,
  CoursesSuccess,
  CoursesError,
  CoursesWithLessonsSuccess
} from "../actions/coursesData";

// getCourses
export const getFullPackages = () => {
  return (dispatch, getState) => {
    const state = getState();
    if (state.coursesData.courses.length) return;

    dispatch(CoursesRequest());
    API.getFullPackages()
      .then(({ data }) => dispatch(CoursesSuccess(data)))
      .catch(err => dispatch(CoursesError(err.message)));
  };
};

export const getCoursesWithLessons = () => {
  return dispatch => {
    dispatch(CoursesRequest());
    API.getCoursesWithLessons()
      .then(resp =>
        dispatch(CoursesWithLessonsSuccess(resp.courses, resp.lessons))
      )
      .catch(err => dispatch(CoursesError(err.message)));
  };
};
