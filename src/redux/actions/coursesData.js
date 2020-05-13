import {
  COURSES_SUCCESS,
  COURSES_REQUEST,
  COURSES_ERROR,
  TAB_PACKAGE_ID
} from "../types/coursesData";

export const CoursesSuccess = fullPackages => {
  return { type: COURSES_SUCCESS, payload: fullPackages };
};

export const CoursesRequest = () => {
  return { type: COURSES_REQUEST };
};

export const CoursesError = errorMessage => {
  return { type: COURSES_ERROR, errorMessage };
};

export const SetTabPackageId = id => {
  return { type: TAB_PACKAGE_ID, payload: id };
};
