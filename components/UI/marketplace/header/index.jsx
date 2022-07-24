import { Breadcrumbs } from "@components/UI/common"
import { EthRates, WalletBar } from "@components/UI/Web3"
import React from "react"

const MarketPlaceHeader = ({ links }) => {
  return (
    <>
      <WalletBar />
      <EthRates />
      <div className="flex justify-end">
        <Breadcrumbs links={links} />
      </div>
    </>
  )
}

MarketPlaceHeader.defaultProps = {
  links: [
    {
      href: "/marketplace",
      name: "Buy",
    },
    {
      href: "/marketplace/courses/owned",
      name: "My Courses",
    },
    {
      href: "/marketplace/courses/manage",
      name: "Manage Courses",
    },
  ],
}

export default MarketPlaceHeader
