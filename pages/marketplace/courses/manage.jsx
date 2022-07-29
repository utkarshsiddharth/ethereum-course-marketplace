import { Button } from "@components/UI/common"
import { CourseFilter, OwnedCourseCard } from "@components/UI/common/Course"
import { BaseLayout } from "@components/UI/Layout"
import { MarketPlaceHeader } from "@components/UI/marketplace"
import React from "react"

const ManageCourses = () => {
  return (
    <BaseLayout>
      <MarketPlaceHeader />
      <CourseFilter />
      <section className="grid grid-cols-1">
        <OwnedCourseCard>
          <div className="flex mr-2 relative rounded-md">
            <input
              type="text"
              name="account"
              id="account"
              className="w-96 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
              placeholder="0x2341ab..."
            />
            <Button>Verify</Button>
          </div>
        </OwnedCourseCard>
      </section>
    </BaseLayout>
  )
}

export default ManageCourses
