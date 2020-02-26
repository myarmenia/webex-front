import {
  COURSES_REQUEST,
  COURSES_ERROR,
  COURSES_SUCCESS,
  LESSONS_SUCCESS,
  TAB_PACKAGE_ID
} from "../types/coursesData";

const initialState = {
  loading: false,
  error: "",
  tab_package_id: 1,
  courses: [],
  lessons: [],
  packages: []
};

export default function coursesData(state = initialState, action) {
  switch (action.type) {
    case TAB_PACKAGE_ID:
      return { ...state, tab_package_id: action.payload };

    case COURSES_REQUEST:
      return { ...state, loading: true };

    case COURSES_SUCCESS:
      const {
        payload: { packages, courses, lessons }
      } = action;

      return {
        ...state,
        loading: false,
        packages,
        courses,
        lessons,
        tab_package_id: packages[0].id
      };

    case LESSONS_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: action.payload.courses,
        lessons: action.payload.lessons
      };

    case COURSES_ERROR:
      return { ...state, loading: false, error: action.errorMessage };

    default:
      return state;
  }
}
