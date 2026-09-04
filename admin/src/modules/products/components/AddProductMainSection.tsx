import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Trash } from "lucide-react"
import { Field, FieldTitle } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'; 

type Variant = {
  id: string,
  nama: string,
  options?: {
    price: number,
    satuan: string
  }
}

const AddProductMainSection = () => {
  
  const initialVariant : Variant = {id: uuidv4(), nama: "", options: {price: 0, satuan: ''}}
  const [variant, setVariant] = useState<Variant[]>([initialVariant])

  const handleAddVarianInput = () => {
    setVariant((prevState) => [{id: uuidv4(), nama: "", options: {price: 0, satuan: ""}}, ...prevState])
  }

  const handleDeleteVariantInput = (id: string) => {
    if (variant.length === 1) return

    const newList = variant.filter((item: Variant) => {
      return item.id !== id
    })

    setVariant(newList)
  }

  const items = [
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "System", value: "system" },
  ]
  // const [variant, setVariant] = useState<Variant[]>([...initialVariant])

  const itemSatuan = ['Kilogram', 'Ikat', 'Gram']

  return (
    <main className="w-2/3 flex flex-col gap-y-4">
    {/* general information */}
      <Card className="w-full px-4">
        <CardTitle className="font-semibold">Informasi Umum</CardTitle>

        <div className="">
          <Label htmlFor="name" className="mb-2">Nama Produk</Label>
          <Input className="w-full" name="name" id="name" placeholder="Sayur Bayam" autoComplete="off" />
        </div>

        <div className="">
          <Label htmlFor="name" className="mb-2">Deskripsi</Label>
          <Textarea className="w-full h-40 resize-none" placeholder="sayur bayam adalah sayur yang bermanfaat"></Textarea>
        </div>
      </Card>

      {/* pricing */}
      <Card className="w-full px-4">
        <CardTitle className="font-semibold">Informasi Harga</CardTitle>

        {/* <Field>
          <FieldLabel htmlFor="input-group-url">Website URL</FieldLabel>
          <InputGroup>
            <InputGroupInput id="input-group-url" placeholder="example.com" />
            <InputGroupAddon>
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <InfoIcon />
            </InputGroupAddon>
          </InputGroup>
        </Field> */}
      </Card>

      {/* varian section */}
      <Card className="w-full ">
        <CardHeader className="w-full flex items-center justify-between">
          <CardTitle className="font-semibold">Informasi Varian</CardTitle>
          <Button size='sm' type="button" onClick={handleAddVarianInput}>Jenis<Plus /></Button>
        </CardHeader>

        
        <CardContent className="w-full flex flex-col gap-y-3">
          {variant.map((item: Variant, index: number) => {
            return (
              <main key={item.id} className="w-full flex items-center justify-center gap-x-2">
                <Field className="w-2/4">
                  <FieldTitle>Jenis produk {index + 1}</FieldTitle>
                  <Input placeholder="Masukan nama varian"/>
                </Field>

                <Field className="flex-1">
                  <FieldTitle>Harga varian</FieldTitle>
                  <Input type="number" placeholder="10.000"/>
                </Field>

                <Field className="flex-1">
                  <FieldTitle>Satuan</FieldTitle>
                  <Select items={items}>
                    <SelectTrigger className="w-full max-w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Satuan</SelectLabel>
                        {itemSatuan.map((item) => (
                          <SelectItem key={item} value={item} >
                            {item}
                          </SelectItem>
                        ))} 
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Button type="button" onClick={() => handleDeleteVariantInput(item.id)} size='icon' className='self-end' variant='destructive'><Trash /></Button>
              </main>
            )
          })}
        </CardContent>
      </Card>
    </main>
  )
}

export default AddProductMainSection