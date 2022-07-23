import { Hero } from "@components/UI/common"
import { BaseLayout } from "@components/UI/Layout"
import { getAllCourses } from "../components/UI/content/courses/fetcher"
import { CourseCard, CourseList } from "@components/UI/common/Course"
import { useSelector } from "react-redux"
import { useEffect } from "react"

export default function Home({ courses }) {
  return (
    <>
      <BaseLayout>
        <Hero />
        <CourseList courses={courses}>
          {(course, index) => (
            <CourseCard course={course} id={`home-${courses.id}-${index}`} />
          )}
        </CourseList>
      </BaseLayout>
    </>
  )
}

export function getStaticProps() {
  const { data } = getAllCourses()
  return {
    props: {
      courses: data,
    },
  }
}
