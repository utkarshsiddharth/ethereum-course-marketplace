import { Hero, Breadcrumbs } from "@components/UI/common"
import { CourseList } from "@components/UI/common/Course"
import { OrderCard } from "@components/UI/common/Order"
import { BaseLayout } from "@components/UI/Layout"
import { EthRates, WalletBar } from "@components/UI/Web3"

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
