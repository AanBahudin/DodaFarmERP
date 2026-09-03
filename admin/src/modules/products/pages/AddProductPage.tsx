import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Wrapper } from "@/shared/components"
import { PackagePlus, Trash } from "lucide-react"


const AddProductPage = () => {
  return (
    <Wrapper className="w-full">

      {/* header */}
      <Card className="w-full flex flex-row items-center justify-between px-4 mb-4">
        <div>
          <CardTitle className="text-lg font-semibold">Tambah Produk</CardTitle>
          <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit.</CardDescription>
        </div>

        <div className="flex items-center justify-center gap-x-2">
          <Button type="button" variant='destructive' className='flex items-center justify-center gap-x-2'><Trash />  Buang Perubahan</Button>
          <Button type="button" className='flex items-center justify-center gap-x-2'><PackagePlus/>Tambah Produk</Button>
        </div>
      </Card>

      <main className="w-full flex items-start justify-between gap-x-4">
        {/* left/main section */}
        <div className="w-2/3">
          <Card className="w-full">
            Main section
          </Card>
        </div>

        {/* right section */}
        <div className="flex-1">
          <Card>
            secondary section
          </Card>
        </div>
      </main>

    </Wrapper>
  )
}

export default AddProductPage