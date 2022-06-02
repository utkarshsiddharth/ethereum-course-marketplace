import { Modal } from "@components/common"
import {
  CourseHero,
  CourseKeypoints,
  CourseLecture,
} from "@components/common/Course"
import { BaseLayout } from "@components/Layout"

export default function Course() {
  return (
    <>
      <BaseLayout>
        <CourseHero />
        <CourseKeypoints />
        <CourseLecture />
        <Modal />
      </BaseLayout>
    </>
  )
}
