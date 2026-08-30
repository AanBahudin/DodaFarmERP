import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import {ChevronRight} from "lucide-react"
import sidebarMenu from "../constants/sidebarMenu"
import Logo from "./Logo"


export function AdminSidebar() {
  return (
<Sidebar className="bg-sidebar-primary">
      <SidebarContent>
        <SidebarGroup>
            <main className="flex items-start justify-start gap-x-2 mb-10">
                <Logo />
                <SidebarGroupLabel className="text-xl font-semibold">DodaFarm</SidebarGroupLabel>
            </main>

          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarMenu.map((menu) => {
                if (menu.items.length === 0) {
                    return (
                        <SidebarMenuButton className="w-full flex items-center justify-start py-6">
                            <menu.icon className="stroke-sidebar-primary" />
                            <a href={menu.url}>
                                <span>{menu.title}</span>
                            </a>
                        </SidebarMenuButton>
                    )
                }

                return (
                    <Collapsible key={menu.title} className="group/collapsible"  >
                      <SidebarMenuItem className="flex-1">
                        {/* Menu utama */}
                        <CollapsibleTrigger className='w-full'>
                          <SidebarMenuButton className="w-full flex items-center justify-between py-6">
                            <menu.icon className="stroke-sidebar-primary" />
                            <span>{menu.title}</span>
    
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
    
                        {/* Submenu */}
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {menu.items.map((item) => (
                                <a href={item.url}>
                                    <SidebarMenuSubItem key={item.title}>
                                        <SidebarMenuSubButton>
                                            <span>{item.title}</span>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                </a>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
    
                      </SidebarMenuItem>
                    </Collapsible>
                  )}
                )
              }
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default AdminSidebar