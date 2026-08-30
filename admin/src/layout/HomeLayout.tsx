import { Outlet } from "react-router"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AdminSidebar from "@/shared/components/AdminSidebar"

const HomeLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-start justify-between">
      {/* sidebar section */}
      <SidebarProvider className="w-full flex h-screen flex-0">
        <AdminSidebar />

        <main className="w-full bg-red-50 flex flex-col">
          <SidebarTrigger />
          <div>
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
}

export default HomeLayout