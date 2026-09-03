import { Button } from '@/components/ui/button'
import { Wrapper } from '@/shared/components'
import { RotateCw } from 'lucide-react'
import moment from 'moment'

const DashboardHead = () => {

  // nanti ganti dengan fungsi reload dar TanStack
  const refreshFn = () => {
    location.reload()
  }

  return (
    <Wrapper className='flex items-center justify-between p-0 mb-2'>
      <h3 className='font-bold'>Selamat Datang Admin👋</h3>

      <main className='flex items-center justify-center gap-x-4'>
        <Button type='button' onClick={refreshFn} variant='secondary' size='sm' className='flex items-center justify-center gap-x-2'><RotateCw /> Refresh</Button>
        <p className='py-1 px-4 text-xs font-semibold bg-primary/10 rounded-lg text-primary'>{moment().format('LL')}</p>
      </main>
    </Wrapper>
  )
}

export default DashboardHead