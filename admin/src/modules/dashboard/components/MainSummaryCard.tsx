import { Card, CardTitle } from '@/components/ui/card'
import type { LucideIcon } from 'lucide-react'

type MainSummaryCardProps = {
    title: string,
    Icon: LucideIcon,
    value: number | string
}

const MainSummaryCard = ({Icon, title, value} : MainSummaryCardProps) => {
  return (
    <Card className='flex-1 p-3 bg-accent'>
        <CardTitle className='flex items-center justify-start gap-x-2'>
            <Icon className='w-6 h-5 stroke-primary' />
            <span className='font-semibold text-primary'>{title}</span>
        </CardTitle>

        <h1 className='text-3xl font-bold'>{value}</h1>
    </Card>
  )
}

export default MainSummaryCard