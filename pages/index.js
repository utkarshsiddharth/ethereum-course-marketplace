import { Hero, Breadcrumbs } from "@components/common"
import { CourseList } from "@components/common/Course"
import { OrderCard } from "@components/common/Order"
import { BaseLayout } from "@components/Layout"
import { EthRates, WalletBar } from "@components/Web3"

export default function Home() {
  return (
    <>
      <BaseLayout>
        <Hero />
        <Breadcrumbs />
        <WalletBar />
        <EthRates />
        <OrderCard />
        <CourseList />
      </BaseLayout>
    </>
  )
}
