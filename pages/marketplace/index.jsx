import { BaseLayout } from "@components/UI/Layout"
import { getAllCourses } from "../../components/UI/content/courses/fetcher"
import { CourseCard, CourseList } from "@components/UI/common/Course"
import { WalletBar } from "@components/UI/Web3"
import { useAccount, useNetwork } from "@components/hooks"
import useMainHook from "@components/hooks/web3/useMainHook"

export default function Marketplace({ courses }) {
  const { account, isLoading, isSupported, chainId, target } = useMainHook()

  console.log({ chainId, target, isSupported })
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
        <CourseList courses={courses}>
          {(course, index) => (
            <CourseCard
              course={course}
              id={`marketplace-${courses.id}-${index}`}
            />
          )}
        </CourseList>
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
