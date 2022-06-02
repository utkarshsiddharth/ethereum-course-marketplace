import { Footer, Hero, Navbar, Breadcrumbs } from "@components/common"
import { CourseList } from "@components/common/Course"
import { OrderCard } from "@components/common/Order"
import { EthRates, WalletBar } from "@components/Web3"

export default function Home() {
  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <Navbar />
          <div className="fit">
            <Hero />
            <Breadcrumbs />
            <WalletBar />
            <EthRates />
            <OrderCard />
            <CourseList />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
