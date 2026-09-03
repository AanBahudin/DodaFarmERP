import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardTitle } from "@/components/ui/card"


const AddProductMainSection = () => {
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
    </main>
  )
}

export default AddProductMainSection