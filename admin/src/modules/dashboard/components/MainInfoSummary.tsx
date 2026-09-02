
import { Wrapper } from '@/shared/components'
import { CircleDollarSign, DollarSign, Package, PackageCheck } from 'lucide-react'
import MainSummaryCard from './MainSummaryCard'

const MainInfoSummary = () => {

    const mainSummaryDashboard = [
        {title: 'Total Pendapatan', Icon: CircleDollarSign, value: "13.231.010"},
        {title: 'Pendapatan Hari ini', Icon: DollarSign, value: "13.231.010"},
        {title: 'Pesanan', Icon: Package, value: "92"},
        {title: 'Total Terkirim', Icon: PackageCheck, value: "20"},
    ]

    return (
        <Wrapper className='flex items-center justify-between p-0 mb-2 gap-x-4 my-4'>
            {mainSummaryDashboard.map((item, index:number) => (
                <MainSummaryCard {...item} key={index} />
            ))}
        </Wrapper>
    )
}

export default MainInfoSummary