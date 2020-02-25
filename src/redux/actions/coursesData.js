
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
  return { type: COURSES_ERROR, errorMessage }
}

