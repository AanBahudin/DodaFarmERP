import { SidebarTrigger } from "@/components/ui/sidebar"
import personImg from '@/assets/images/person.jpeg'
import { Bell, Plus, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { useLocation } from "react-router"

const AdminNavbar = () => {
    
    const location = useLocation().pathname.split('/')

    return (
        <section className="w-full py-4 px-10 border-b border-slate-200 shadow flex items-center justify-between">
            <main className="flex items-center justify-start gap-x-10">
                <SidebarTrigger className='stroke-sidebar-primary' />

                <Breadcrumb>
                    <BreadcrumbList>
                        <>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </>
                        {location.map((item: string, index) => {
                            const isLastItem = index + 1 === location.length
                            if (item === '' || item === '/') {
                                return 
                            }
                            return (
                                <>
                                    <BreadcrumbItem key={index}>
                                        <BreadcrumbLink className={`capitalize ${isLastItem && 'text-primary font-bold'}`} href={`/${item}`}>{item}</BreadcrumbLink>
                                    </BreadcrumbItem>

                                    {!isLastItem ? <BreadcrumbSeparator /> : null}
                                </>
                            )
                        })}
                    </BreadcrumbList>
                </Breadcrumb>
            </main>

            <main className="flex items-center gap-x-4">

                <Input placeholder="Cari karyawan, produk" className="w-100 focus-visible:ring-2  focus-visible:ring-primary/40 border-2 text-sm border-slate-400 py-4" />

                <Popover>
                    <PopoverTrigger render={(
                        <div className="w-10 h-10 flex relative items-center justify-center p-2 group hover:bg-primary/10 rounded-full duration-200 ease-in-out">
                            <div className="w-2 h-2 rounded-full bg-primary absolute top-2 right-2"></div>
                            <Bell className="stroke-primary group-hover:stroke-primary/80 duration-200 ease-in-out" />
                        </div>

                    )} />
                    <PopoverContent align="start" className='w-120 p-0 max-h-[50vh] overflow-y-scroll'>
                        <PopoverTitle className='p-2'>Notifikasi</PopoverTitle>
                        <Separator className='p-0 my-1' />
                        {Array.from({length: 20}).map((_, index) => (
                            <PopoverHeader key={index} className="hover:bg-primary/20 p-2">
                                <PopoverTitle>Dimensions</PopoverTitle>
                                <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
                            </PopoverHeader>
                        ))}
                    </PopoverContent>
                </Popover>

                <Button className='flex items-center justify-center'>
                    <Plus />
                    Produk
                </Button>

                <Button className='flex items-center justify-center' variant='outline'>
                    <Truck />
                    Pesanan
                </Button>
                <img src={personImg} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
            </main>
        </section>
  )
}

export default AdminNavbar