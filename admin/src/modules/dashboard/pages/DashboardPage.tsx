import { Wrapper } from "@/shared/components"
import { DashboardHead, DashboardMainGraph, DashboardOrderTable, DashboardSecondaryGraph, MainInfoSummary, QuickAccess } from "../components"

const DashboardPage = () => {
  return (
    <Wrapper className="w-full">
      <DashboardHead />
      <MainInfoSummary />

      <div className="flex items-start gap-x-4 justify-between h-fit">
        <DashboardMainGraph />
        <DashboardSecondaryGraph />
      </div>

      <div className="w-full flex items-start gap-x-4 justify-between mt-4">
        <DashboardOrderTable />
        <QuickAccess />
      </div>
    </Wrapper>
  )
}

export default DashboardPage