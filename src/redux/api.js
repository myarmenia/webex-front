import axios from "axios";

import {
  API_COURSES_URL,
  API_LESSONS_URL,
  API_FULL_PACKAGES_URL
} from "./config";

const api = {
  // getCourses: () => axios.get(API_COURSES_URL),
  getFullPackages: () => axios.get(API_FULL_PACKAGES_URL),
  getCoursesWithLessons: () => axios.get(API_LESSONS_URL)
};

export default api;
