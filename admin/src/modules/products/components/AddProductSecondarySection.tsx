import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Field, FieldDescription } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { useState } from 'react'
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Badge } from '@/components/ui/badge'
import { X } from 'lucide-react'

const AddProductSecondarySection = () => {

  const [selectedCategory, setSelectedCategory] = useState<string[]>([])
  const handleCategory = (value: string) => {
    setSelectedCategory((prev: string[]) => [...prev, value])
  }

  const [activeImg, setActiveImg] = useState("")
  const handleImg = (url: string) => setActiveImg(url)

  const images = [
    {
      name: "workspace.png",
      meta: "PNG · 820 KB",
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80",
      alt: "Workspace",
    },
    {
      name: "desk-reference.jpg",
      meta: "JPG · 1.1 MB",
      src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&auto=format&fit=crop&q=80",
      alt: "Desk",
    },
    {
      name: "office-reference.jpg",
      meta: "JPG · 940 KB",
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&auto=format&fit=crop&q=80",
      alt: "Office",
    },
    {
      name: "office-reference.jpg",
      meta: "JPG · 940 KB",
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&auto=format&fit=crop&q=80",
      alt: "Office",
    },{
      name: "office-reference.jpg",
      meta: "JPG · 940 KB",
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&auto=format&fit=crop&q=80",
      alt: "Office",
    },{
      name: "office-reference.jpg",
      meta: "JPG · 940 KB",
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&auto=format&fit=crop&q=80",
      alt: "Office",
    },
  ]

  const frameworks = [
    "Sayur Hijau",
    "Bumbu Masakan",
    "Daging",
    "Ultra Processed",
    "Minuman",
  ] as const

  return (
    <div className="w-1/3 flex-1 flex flex-col gap-y-4">
      {/* image section */}
      <Card className='px-4'>
        <CardTitle className='font-semibold'>Foto Produk</CardTitle>
        
        <Card className='w-full h-70 overflow-hidden'>
          {activeImg && (
            <img className='w-full h-full object-contain' src={activeImg} alt="" />
          )}
        </Card>

        <CardContent className="w-full p-0">
          <AttachmentGroup>
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex w-max gap-4 p-4">
                {images.map((image) => (
                  <Attachment
                    onClick={() => handleImg(image.src)}
                    key={image.name}
                    orientation="vertical"
                    className="w-50 shrink-0"
                  >
                    <AttachmentMedia variant="image">
                      <img src={image.src} alt={image.alt} />
                    </AttachmentMedia>

                    <AttachmentContent>
                      <AttachmentTitle>{image.name}</AttachmentTitle>
                      <AttachmentDescription>
                        {image.meta}
                      </AttachmentDescription>
                    </AttachmentContent>
                  </Attachment>
                ))}
              </div>

              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </AttachmentGroup>

          <Field className='mt-2'>
            <Input id="picture" type="file" className='w-full '/>
            <FieldDescription>Pilih gambar untuk diupload</FieldDescription>
          </Field>
        </CardContent>
      </Card>
      
      {/* category section */}
      <Card className='px-4'>
        <CardTitle className='font-semibold'>Kategori Produk</CardTitle>

        {selectedCategory.length > 0 && (
          <div className='flex gap-1 flex-wrap'>
            {selectedCategory.map((item: string, index:number) => (
              <Badge key={index} className='text-sm bg-primary'>{item} <X /></Badge>
            ))}
          </div>
        )}

        <Combobox items={frameworks}>
          <ComboboxInput placeholder="Pilih kategori produk" />
          <ComboboxContent>
            <ComboboxEmpty>Tidak ditemukan.</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem onClick={() => handleCategory(item)} key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Card>
    </div>
  )
}

export default AddProductSecondarySection