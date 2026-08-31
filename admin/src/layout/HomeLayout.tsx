import { Outlet } from "react-router"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AdminSidebar from "@/shared/components/AdminSidebar"

const HomeLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-start justify-between">
      {/* sidebar section */}
      <SidebarProvider className="w-full flex h-screen">
        <AdminSidebar />

        <main className="w-full flex flex-col">
          <div className="w-full p-4 bg-background">
            <SidebarTrigger className='stroke-sidebar-primary' />
          </div>

          <div className="h-screen overflow-y-auto">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
}

export default HomeLayout