import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"

import { Wrapper } from "@/shared/components"
import { PackagePlus, Trash } from "lucide-react"
// import { Field } from "@/components/ui/field"
import { AddProductMainSection, AddProductSecondarySection } from "../components"


const AddProductPage = () => {
  return (
    <Wrapper className="w-full">
      {/* header */}
      <Card className="w-full flex flex-row items-center justify-between px-4 mb-4 bg-primary/5 border border-primary/20">
        <div>
          <CardTitle className="text-lg font-bold">Tambah Produk</CardTitle>
          <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit.</CardDescription>
        </div>

        <div className="flex items-center justify-center gap-x-2">
          <Button type="button" variant='destructive' className='flex items-center justify-center gap-x-2'><Trash />  Buang Perubahan</Button>
          <Button type="button" className='flex items-center justify-center gap-x-2'><PackagePlus/>Tambah Produk</Button>
        </div>
      </Card>

      <main className="w-full flex items-start justify-between gap-x-4">
        <AddProductMainSection />
        {/* right section */}
        <AddProductSecondarySection />
      </main>

    </Wrapper>
  )
}

export default AddProductPage