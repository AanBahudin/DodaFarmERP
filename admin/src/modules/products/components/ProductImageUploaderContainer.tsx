import { useState } from 'react'
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

const ProductImageUploader = () => {
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
      },
    ]


  return (
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
  )
}

export default ProductImageUploader