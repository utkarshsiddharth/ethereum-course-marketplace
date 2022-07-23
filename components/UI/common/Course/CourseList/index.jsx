import React from "react"
const CourseList = ({ courses, children }) => {
  return (
    <section className="grid grid-cols-2 gap-4 mb-5">
      {courses.map((course, index) => children(course, index))}
    </section>
  )
}

export default CourseList
