import { createSelector } from 'reselect';

const courses = state => state.coursesData.courses;

const lessons = state => state.coursesData.lessons;

export const coursesSelector = createSelector(courses);

export const lessonsSelector = createSelector(lessons, course_id => lessons[course_id]);