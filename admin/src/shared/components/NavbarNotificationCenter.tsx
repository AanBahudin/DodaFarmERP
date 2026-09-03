import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle, PopoverDescription } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Bell } from "lucide-react"

const NavbarNotificationCenter = () => {
  return (
    <Popover>
        <PopoverTrigger render={(
            <div className="w-10 h-10 flex relative items-center justify-center p-2 group hover:bg-primary/10 rounded-full duration-200 ease-in-out">
                <div className="w-2 h-2 rounded-full bg-destructive animate-pulse absolute top-2 right-2"></div>
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
  )
}

export default NavbarNotificationCenter