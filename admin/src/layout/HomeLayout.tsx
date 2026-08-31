import { Outlet } from "react-router"
import { SidebarProvider } from "@/components/ui/sidebar"
import AdminSidebar from "@/shared/components/AdminSidebar"
import { AdminNavbar } from "@/shared/components"

const HomeLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-start justify-between">
      {/* sidebar section */}
      <SidebarProvider className="w-full flex h-screen">
        <AdminSidebar />

        <main className="w-full flex flex-col">
          <AdminNavbar />

          <div className="h-screen overflow-y-auto px-10 py-4">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
}

export default HomeLayout