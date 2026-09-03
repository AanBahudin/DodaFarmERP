import personImg from '@/assets/images/person.jpeg'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { useNavigate } from 'react-router'

type MitraTopSalesCardPropsType = {
    imageURL?: string,
    name?: string,
    location?: string
}

const MitraTopSalesCard = ({imageURL, location, name} : MitraTopSalesCardPropsType) => {

    const navigation = useNavigate()
    const handleNavigation = (params: string) => {
        navigation(`/mitra/${params}`)
    }

    return (
        <Card onClick={() => handleNavigation('test')} className='bg-primary/20 hover:bg-primary/25 duration-200 ease-in-out group'>
            <CardContent className='flex gap-x-4 items-start h-fit justify-start '>
            <img src={imageURL || personImg} alt="Profile" className="w-10 h-10 rounded-full object-cover" />

            <main className='w-full flex-1'>
                <CardTitle className='text-sm font-semibold group-hover:underline'>{name || 'Nama Mitra'}</CardTitle>
                <CardTitle className='text-sm'>{location || 'Cibeber'}</CardTitle>
            </main>
            </CardContent>
        </Card>
    )
}

export default MitraTopSalesCard