import Link from "next/link"
import React from "react"

const CourseCard = ({ course, id, Footer, disabled }) => {
  return (
    <div
      key={`course-${id}`}
      className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className={`h-48 w-full object-cover md:w-48 ${
              disabled && "filter grayscale"
            }`}
            src={course.coverImage}
            alt={course.title}
          />
        </div>
        <div className="py-4 px-8 flex flex-col justify-between">
          <div>
            <div className=" uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Case study
            </div>

            <Link href={`courses/${course.slug}`}>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                {course.title}
              </a>
            </Link>

            <p className="mt-2 text-gray-500">{course.decription}</p>
          </div>
          {/* action */}
          <div>{Footer && <Footer />}</div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
