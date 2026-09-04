import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import React from 'react'

const CategorySelector = () => {

    const anchor = useComboboxAnchor()
    const frameworks = [
        "Sayur Hijau",
        "Bumbu Masakan",
        "Daging",
        "Ultra Processed",
        "Minuman",
    ] as const

    return (
        <main className='w-full'>
            <Combobox
                required
                multiple
                autoHighlight
                items={frameworks}
                defaultValue={[frameworks[0]]}
                >
                    <ComboboxChips ref={anchor} className="w-full">
                        <ComboboxValue>
                            {(values) => (
                                <React.Fragment>
                                {values.map((value: string) => (
                                    <ComboboxChip key={value}>{value}</ComboboxChip>
                                ))}
                                <ComboboxChipsInput />
                                </React.Fragment>
                            )}
                        </ComboboxValue>
                    </ComboboxChips>

                    <ComboboxContent anchor={anchor}>
                        <ComboboxEmpty>No items found.</ComboboxEmpty>
                        <ComboboxList>
                        {(item) => (
                            <ComboboxItem key={item} value={item}>
                            {item}
                            </ComboboxItem>
                        )}
                        </ComboboxList>
                    </ComboboxContent>
            </Combobox>
        </main>
    )
}

export default CategorySelector