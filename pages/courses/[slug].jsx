import { Modal } from "@components/UI/common"
import {
  CourseHero,
  CourseKeypoints,
  CourseLecture,
} from "@components/UI/common/Course"
import { getAllCourses } from "@components/UI/content/courses/fetcher"
import { BaseLayout } from "@components/UI/Layout"

export default function Course({ course }) {
  return (
    <>
      <BaseLayout>
        <CourseHero course={course} />
        <CourseKeypoints points={course.wsl} />
        <CourseLecture locked={true} />
        <Modal />
      </BaseLayout>
    </>
  )
}

export function getStaticPaths() {
  const { data } = getAllCourses()

  return {
    paths: data.map((course) => ({
      params: {
        slug: course.slug,
      },
    })),
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  const { data } = getAllCourses()
  const course = data.filter((c) => c.slug === params.slug)[0]
  return {
    props: {
      course: course,
    },
  }
}
