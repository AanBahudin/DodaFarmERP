import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useLocation } from "react-router"

const NavbarBreadcrumbs = () => {
    const location = useLocation().pathname.split('/')
    return (
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
    )
}

export default NavbarBreadcrumbs