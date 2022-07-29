import { Button } from "@components/UI/common"
import { OwnedCourseCard } from "@components/UI/common/Course"
import { BaseLayout } from "@components/UI/Layout"
import { MarketPlaceHeader } from "@components/UI/marketplace"
import React from "react"

const OwnedCourses = () => {
  return (
    <BaseLayout>
      <MarketPlaceHeader />
      <section className="grid grid-cols-1">
        <OwnedCourseCard>
          <Button>Watch the course</Button>
        </OwnedCourseCard>
      </section>
    </BaseLayout>
  )
}

export default OwnedCourses
