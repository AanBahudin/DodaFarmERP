import { Card, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import CategorySelector from './CategorySelector'

const AddCategoryProductContainer = () => {
  return (
    <Card className='px-4'>
        <div className='w-full flex items-center justify-between'>
            <CardTitle className='font-semibold'>Kategori Produk</CardTitle>
            <Dialog>
                <form>
                    <DialogTrigger render={<Button size='icon'><Plus /></Button>} />
                    <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Kategori baru</DialogTitle>
                        <DialogDescription className='text-sm'>Pastikan nama kategori baru tidak sama dengan kategori lain</DialogDescription>
                    </DialogHeader>
                    <FieldGroup>
                        <Field>
                            <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                        </Field>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose render={<Button variant="destructive">Batal</Button>} />
                        <Button type="submit">Simpan</Button>
                    </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
        </div>
        <CategorySelector />
        
    </Card>
  )
}

export default AddCategoryProductContainer