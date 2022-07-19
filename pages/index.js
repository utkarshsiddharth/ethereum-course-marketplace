import { Hero } from "@components/UI/common"
import { BaseLayout } from "@components/UI/Layout"
import { getAllCourses } from "../components/UI/content/courses/fetcher"
import { CourseList } from "@components/UI/common/Course"
import { useSelector } from "react-redux"
import { useEffect } from "react"

export default function Home({ courses }) {
  return (
    <>
      <BaseLayout>
        <Hero />
        <CourseList courses={courses} />
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
