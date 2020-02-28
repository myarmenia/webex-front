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

export const packagesWithTheirCourses = createSelector(
  packagesSelector,
  coursesSelector,
  (packages, courses) => {
    return packages.reduce((pc, pack, i) => {
      const { course_ids = [] } = pack;
      pc[i] = pack;
      const month = pack.month || pack.mounth; // task - fix mounth, it must to be "month"
      pc[i]["pricePerMonth"] = pack.price / month;
      pc[i]["buttonText"] = "Get Started Now";
      pc[i]["currency"] = "AMD";
      pc[i]["courses"] =
        courses.filter(({ id }) => course_ids.includes(id)) || [];
      return pc;
    }, []);
  }
);
