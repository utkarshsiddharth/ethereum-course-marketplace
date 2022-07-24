import { BaseLayout } from "@components/UI/Layout"
import { getAllCourses } from "../../components/UI/content/courses/fetcher"
import { CourseCard, CourseList } from "@components/UI/common/Course"
import { EthRates, WalletBar } from "@components/UI/Web3"
import useMainHook from "@components/hooks/web3/useMainHook"
import Button from "@components/UI/common/Button"
import { useState } from "react"
import { OrderModal } from "@components/UI/common/Order"
import { useEthPrice } from "@components/hooks"

export default function Marketplace({ courses }) {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const { account, isLoading, isSupported, chainId, target, canPurchase } =
    useMainHook()
  const {
    eth: { data: price, priceItem },
  } = useEthPrice()
  return (
    <>
      <BaseLayout>
        <WalletBar
          address={account}
          network={chainId}
          targetNetwork={target}
          isSupported={isSupported}
          isLoading={isLoading}
        />
        <EthRates eth={price} priceItem={priceItem} />
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
