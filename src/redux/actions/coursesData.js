import {
  COURSES_SUCCESS,
  COURSES_REQUEST,
  COURSES_ERROR,
  LESSONS_SUCCESS,
  TAB_PACKAGE_ID
} from "../types/coursesData";

export const CoursesSuccess = courses => {
  return { type: COURSES_SUCCESS, payload: courses };
};

export const CoursesWithLessonsSuccess = (courses, lessons) => {
  return { type: LESSONS_SUCCESS, payload: { courses, lessons } };
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
