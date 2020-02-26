import { createSelector } from "reselect";

// packagesIdSelecotr
export const packagesSelector = state => state.coursesData.packages;
export const coursesSelector = state => state.coursesData.courses;
export const lessonsSelector = state => state.coursesData.lessons;

export const coursesOfPackage = createSelector(
  packagesSelector,

  coursesSelector,
  (packs, courses) => {
    const tabPackId = 3;
    const { course_ids } = packs.find(p => p.id === tabPackId) || {
      course_ids: []
    };
    const ownCourses = courses.filter(({ id }) => course_ids.includes(id));
    // console.log('ownCourses', ownCourses)

    return ownCourses;
  }
);
