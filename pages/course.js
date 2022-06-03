import { Modal } from "@components/common"
import {
  CourseHero,
  CourseKeypoints,
  CourseLecture,
} from "@components/UI/common/Course"
import { BaseLayout } from "@components/UI/Layout"

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
