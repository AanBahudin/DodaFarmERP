import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { SortAsc, TruckElectric } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import moment from 'moment'
import { Link, useNavigate } from 'react-router'

const DashboardOrderTable = () => {

  const navigate = useNavigate()
  const handleNavigate = (id: string) => navigate(`/pesanan/${id}`)

  return (
    <Card className='w-3/4 p-4 bg-primary/10'>
      <main className='w-full flex items-center justify-between'>
        <CardTitle className="flex items-center gap-x-2 font-semibold">
          <TruckElectric className="mb-2 h-5 w-5 stroke-primary" />
          Perlu Dikirim
        </CardTitle>

        <Button variant='outline' size='sm' className='flex items-center justify-center gap-x-2 bg-primary/20'><SortAsc /> Sort</Button>
      </main>

      <CardContent className='w-full p-0'>
        <Table className=''>
          <TableCaption className='text-primary/80 hover:text-primary duration-200 ease-in-out hover:underline cursor-default'>
            <Link to='/pesanan'>Lihat pesanan lengkap</Link>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-25">No Pesanan</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Status Pengiriman</TableHead>
              <TableHead align='center'>Tanggal</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({length: 6}).map((_, index: number) => {
              return (
                <TableRow key={index} className='hover:bg-primary/20 ease-in-out duration-200 cursor-default' onClick={() => handleNavigate('test')}>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Aan Bahudin</TableCell>
                  <TableCell>Sedang Dikirim</TableCell>
                  <TableCell>{moment().format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default DashboardOrderTable