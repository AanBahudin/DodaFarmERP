import { AddCategoryProductContainer, ProductImageUploaderContainer } from "@/modules/products/components"


const AddProductSecondarySection = () => {

  return (
    <div className="w-1/3 flex-1 flex flex-col gap-y-4">
      {/* image section */}
      <ProductImageUploaderContainer />
      
      {/* category section */}
      <AddCategoryProductContainer />
      
    </div>
  )
}

export default AddProductSecondarySection