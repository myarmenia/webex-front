import {
  COURSES_REQUEST,
  COURSES_ERROR,
  COURSES_SUCCESS,
  TAB_PACKAGE_ID,
} from "../types/coursesData";

const initialState = {
  loading: false,
  error: "",
  tabPackageId: 1,
  courses: [],
  lessons: [],
  packages: [],
};

export default function coursesData(state = initialState, action) {
  switch (action.type) {
    case TAB_PACKAGE_ID:
      return { ...state, tabPackageId: action.payload };

    case COURSES_REQUEST:
      return { ...state, loading: true };

    case COURSES_SUCCESS:
      const {
        payload: { packages, courses, lessons },
      } = action;

      return {
        ...state,
        loading: false,
        packages,
        courses,
        lessons,
        tabPackageId: packages[0].id,
      };

    case COURSES_ERROR:
      return { ...state, loading: false, error: action.errorMessage };

    default:
      return state;
  }
}
