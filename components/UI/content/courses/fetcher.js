import courses from "./index.json"

export const getAllCourses = () => {
  return {
    data: courses,
    coursemMap: courses.reduce((acc, data, index) => {
      acc[data.id] = data
      acc[data.id].index = index
      return acc
    }, {}),
  }
}
