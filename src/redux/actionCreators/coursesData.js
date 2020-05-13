import API from "../api";

import {
  CoursesRequest,
  CoursesSuccess,
  CoursesError,
} from "../actions/coursesData";

// getCourses
export const getFullPackages = (forceRequest = false) => {
  return (dispatch, getState) => {
    const state = getState();
    if (state.coursesData.courses.length) if (!forceRequest) return;

    dispatch(CoursesRequest());
    API.getFullPackages()
      .then(({ data }) => dispatch(CoursesSuccess(data)))
      .catch((err) => dispatch(CoursesError(err.message)));
  };
};
