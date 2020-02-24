import axios from "axios";

import { API_COURSES_URL, API_LESSONS_URL } from './config'

const api = {
  getCourses: () => axios.get(API_COURSES_URL),

  getCoursesWithLessons: () => axios.get(API_LESSONS_URL),
};

export default api;