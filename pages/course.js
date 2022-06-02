import { Footer, Modal } from "@components/common"
import {
  CourseHero,
  CourseKeypoints,
  CourseLecture,
} from "@components/common/Course"

export default function Course() {
  return (
    <>
      <div className="relative max-w-7xl mx-auto px-4">
        <CourseHero />
        <CourseKeypoints />
        <CourseLecture />
        <Modal />
      </div>
      <Footer />
    </>
  )
}
