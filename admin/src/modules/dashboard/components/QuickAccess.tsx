import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import { UserStar } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Link } from 'react-router'
import MitraTopSalesCard from './MitraTopSalesCard'

const QuickAccess = () => {
  return (
    <Card className='w-full flex-1 bg-primary/10 self-stretch'>
      <CardTitle className="flex px-4 items-center gap-x-2 font-semibold">
        <UserStar className="mb-2 h-5 w-5 stroke-primary" />
        Top Penjualan Mitra
      </CardTitle>

      <CardContent className='w-full flex flex-col gap-y-2'>
        {Array.from({length: 3}).map((_, index: number) => {
          return (
            <MitraTopSalesCard  />
          )
        })}
      </CardContent>

      <CardFooter>
        <Button className='w-full'>
          <Link to='/mitra'>Lihat semua mitra</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default QuickAccess