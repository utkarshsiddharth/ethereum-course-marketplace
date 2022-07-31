import { BaseLayout } from "@components/UI/Layout"
import { getAllCourses } from "../../components/UI/content/courses/fetcher"
import { CourseCard, CourseList } from "@components/UI/common/Course"
import useMainHook from "@components/hooks/web3/useMainHook"
import Button from "@components/UI/common/Button"
import { useState } from "react"
import { OrderModal } from "@components/UI/common/Order"
import { MarketPlaceHeader } from "@components/UI/marketplace"

export default function Marketplace({ courses }) {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const { canPurchase, account, web3, contract } = useMainHook()

  const purchaseCourse = async (order) => {
    const hexCourseId = web3.utils.utf8ToHex(selectedCourse.id)

    const orderHash = web3.utils.soliditySha3(
      {
        type: "bytes16",
        value: hexCourseId,
      },
      {
        type: "address",
        value: account,
      }
    )

    const emailHash = web3.utils.sha3(order.email)
    const proof = web3.utils.soliditySha3(
      {
        type: "bytes32",
        value: emailHash,
      },
      {
        type: "bytes32",
        value: orderHash,
      }
    )

    const value = web3.utils.toWei(String(order.price))

    try {
      await contract.methods.purchaseCourse(hexCourseId, proof).send({
        from: account,
        value,
      })
      console.log("purchased :)")
    } catch (err) {
      console.error({ err })
    }
  }

  return (
    <>
      <BaseLayout>
        <MarketPlaceHeader />
        <CourseList courses={courses}>
          {(course, index) => (
            <CourseCard
              disabled={!canPurchase}
              course={course}
              id={`marketplace-${courses.id}-${index}`}
              Footer={() => (
                <div>
                  <Button
                    onClick={() => setSelectedCourse(course)}
                    disabled={!canPurchase}
                    classNames="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 hover-text-indigo-800"
                  >
                    Purchase
                  </Button>
                </div>
              )}
            />
          )}
        </CourseList>
      </BaseLayout>
      {selectedCourse && (
        <OrderModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          purchaseCourse={purchaseCourse}
        />
      )}
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
