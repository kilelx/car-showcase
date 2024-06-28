'use client'

import { useState } from "react"
import Image from "next/image"
import { searchManufacturerProps } from "@/types"
import { Combobox, ComboboxButton, ComboboxInput, Transition } from "@headlessui/react"

const SearchManufacturer = ({manufacturer, setManufacturer} : searchManufacturerProps) => {

  const [query, setQuery] = useState('');

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <ComboboxButton className='absolute top-[14px]'>
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car logo"
            />
          </ComboboxButton>
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            // Updating the value
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer