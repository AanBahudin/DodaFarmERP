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
import { useTheme, type Theme } from './ThemeProvider'

const NavbarCollapsibleMenu = () => {
    
    const themeOptions = [
        {value: 'system', caption: "Sistem", Icon: MonitorSmartphone},
        {value: 'light', caption: "Terang", Icon: Sun},
        {value: 'dark', caption: "Gelap", Icon: Moon},
    ]

    const {theme, setTheme} = useTheme()

    return (
        <Popover>
            <PopoverTrigger render={(
                <img src={personImg} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
            )} />
            <PopoverContent align="start">
                    <Link to='/setting'>
                        <PopoverTitle className="flex gap-x-2 items-center justify-start"><Settings className="stroke-primary w-5 h-5" />Pengaturan</PopoverTitle>
                    </Link>
                    <Link to='/my'>
                        <PopoverTitle className="flex gap-x-2 items-center justify-start"><User className="stroke-primary w-5 h-5" />Profil Saya</PopoverTitle>
                    </Link>
                    <Separator />

                    <PopoverHeader>
                        <PopoverTitle>Theme</PopoverTitle>
                        {themeOptions.map((item, index: number) => (
                            <PopoverDescription key={index} onClick={() => setTheme(item.value as Theme)} className={`flex gap-x-2 items-center ${theme === item.value ? 'bg-primary/10' : ''} justify-start py-1 pl-2 hover:text-primary  cursor-default hover:bg-primary/5 rounded-lg`}><item.Icon className="stroke-primary w-5 h-5" />{item.caption}</PopoverDescription>
                        ))}
                    </PopoverHeader>

                    <Button>Logout</Button>
            </PopoverContent>
        </Popover>
    )
}

export default NavbarCollapsibleMenu