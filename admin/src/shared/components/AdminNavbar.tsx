import { SidebarTrigger } from "@/components/ui/sidebar"
import { Plus, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {NavbarBreadcrumbs, NavbarCollapsibleMenu} from "@/shared/components"

const AdminNavbar = () => {
    return (
        <section className="w-full py-4 px-10 border-b border-slate-200 shadow flex items-center justify-between">
            <main className="flex items-center justify-start gap-x-10">
                <SidebarTrigger className='stroke-sidebar-primary' />
                <NavbarBreadcrumbs />
            </main>

            <main className="flex items-center gap-x-4">
                <Input placeholder="Cari karyawan, produk" className="w-100 focus-visible:ring-2  focus-visible:ring-primary/40 border-2 text-sm border-slate-400 py-4" />
                <Button className='flex items-center justify-center bg-primary/10 text-primary hover:text-white'>
                    <Plus />
                    Produk
                </Button>

                <Button className='flex items-center justify-center' variant='outline'>
                    <Truck />
                    Pesanan
                </Button>

                <NavbarCollapsibleMenu />
            </main>
        </section>
  )
}

export default AdminNavbar