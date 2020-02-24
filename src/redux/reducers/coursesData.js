import { COURSES_REQUEST, COURSES_ERROR, COURSES_SUCCESS, LESSONS_SUCCESS } from '../types/coursesData';

const initialState = {
  loading: false,
  error: '',
  courses: [],
  lessons: [],
  packages: []
};

export default function coursesData(state = initialState, action) {
  switch (action.type) {
    case COURSES_REQUEST:
      return { ...state, loading: true };

    case COURSES_SUCCESS:
      return { ...state, loading: false, courses: action.payload };

    case LESSONS_SUCCESS:
      return { ...state, loading: false, courses: action.payload.courses, lessons: action.payload.lessons };

    case COURSES_ERROR:
      return { ...state, loading: false, error: action.errorMessage };

    default:
      return state;
  }
}