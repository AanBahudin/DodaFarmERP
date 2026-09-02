import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { ArrowDownUp, TruckElectric } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const DashboardOrderTable = () => {
  return (
    <Card className='w-3/4 p-4 bg-accent'>
      <main className='w-full flex items-center justify-between'>
        <CardTitle className="flex items-center gap-x-2 font-semibold">
          <TruckElectric className="mb-2 h-5 w-5 stroke-primary" />
          Perlu Dikirim
        </CardTitle>

        <Button variant='outline' size='sm' className='flex items-center justify-center gap-x-2'><ArrowDownUp /> Refresh</Button>
      </main>

      <CardContent className='w-full p-0'>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader className='bg-primary rounded-lg'>
            <TableRow className='rounded-lg'>
              <TableHead className="w-25">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default DashboardOrderTable