import personImg from '@/assets/images/person.jpeg'
import { MonitorSmartphone, Moon, Settings, Sun, User } from "lucide-react"
import { Link } from 'react-router'
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

const NavbarCollapsibleMenu = () => {
  return (
    <Popover>
        <PopoverTrigger render={(
            <img src={personImg} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
        )} />
        <PopoverContent align="start">
                <Link to='/setting'>
                    <PopoverTitle className="flex gap-x-2 items-center justify-start"><Settings className="stroke-slate-800 w-5 h-5" />Pengaturan</PopoverTitle>
                </Link>
                <Link to='/my'>
                    <PopoverTitle className="flex gap-x-2 items-center justify-start"><User className="stroke-slate-800 w-5 h-5" />Profil Saya</PopoverTitle>
                </Link>
                <Separator />

                <PopoverHeader>
                    <PopoverTitle>Theme</PopoverTitle>
                    <PopoverDescription  className="flex gap-x-2 items-center justify-start py-1 pl-2"><MonitorSmartphone className="stroke-slate-800 w-5 h-5" /> System</PopoverDescription>
                    <PopoverDescription className="flex gap-x-2 items-center justify-start py-1 pl-2"><Sun className="stroke-slate-800 w-5 h-5" /> Light</PopoverDescription>
                    <PopoverDescription className="flex gap-x-2 items-center justify-start py-1 pl-2"><Moon className="stroke-slate-800 w-5 h-5" /> Dark</PopoverDescription>
                </PopoverHeader>

                <Button>Logout</Button>
        </PopoverContent>
    </Popover>
  )
}

export default NavbarCollapsibleMenu