import { createSelector } from "reselect";

export const packagesSelector = (state) => state.coursesData.packages;
export const tabPackageIdSelector = (state) => state.coursesData.tabPackageId;
// export const demoCourseIdSelector = state => state.coursesData.demoCourseId;
export const coursesSelector = (state) => state.coursesData.courses;
export const lessonsSelector = (state) => state.coursesData.lessons;

export const courseById = (courseId) => {
  return createSelector(coursesSelector, (courses) => {
    return (
      courses.find((course) => course.id === parseInt(courseId)) || courses[0]
    );
  });
};

export const lessonsByCourseId = (courseId) => {
  return createSelector(
    lessonsSelector,
    courseById(courseId),
    (lessons, course) => {
      return lessons.filter(({ id }) => course.lesson_ids.includes(id));
    }
  );
};

export const coursesOfPackage = createSelector(
  packagesSelector,
  tabPackageIdSelector,
  coursesSelector,
  (packs, tabPackId, courses) => {
    const { course_ids } = packs.find((p) => p.id === parseInt(tabPackId)) || {
      course_ids: [],
    };
    const ownCourses = courses.filter(({ id }) => course_ids.includes(id));

    return ownCourses;
  }
);

export const packagesWithTheirCourses = createSelector(
  packagesSelector,
  coursesSelector,
  (packages, courses) => {
    return packages.reduce((pc, pack, i) => {
      const { course_ids = [] } = pack;
      pc[i] = pack;
      const month = pack.month || pack.mounth; // task - fix mounth, it must to be "month"
      pc[i]["pricePerMonth"] = pack.price / month;
      pc[i]["currency"] = "AMD";
      pc[i]["courses"] =
        courses.filter(({ id }) => course_ids.includes(id)) || [];
      return pc;
    }, []);
  }
);
