'use client'

import { Fragment, useState } from "react"
import Image from "next/image"
import { SearchManufacturerProps } from "@/types"
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from "@headlessui/react"
import { manufacturers } from "@/constants"

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {

  const [query, setQuery] = useState('');

  // Filter the manufacturers based on the query
  const filteredManufacturers =
    // If the query equals to an empty string, return all the manufacturers
    query === ''
      ? manufacturers
      // If not, return manufacturers where the item includes the query
      : manufacturers.filter(item => {
        return (
          item.toLowerCase()
            // Delete the white spaces
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, "")))
      })

  return (
    <div className="search-manufacturer">
      <Combobox
      // We update the state when the combobox value changes
        value={manufacturer}
        onChange={setManufacturer}
      >
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

          <Transition
            // Act as a Fragment = don't add element to the DOM
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            // Clear the query
            afterLeave={() => setQuery('')}
          >
            {/* Where the 'dropdown' is displayed */}
            <ComboboxOptions
              className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              static
            >
              {filteredManufacturers.length === 0 && query !== ""
                // If we can't find a manufacturer
                ? (
                  <ComboboxOption
                    value={query}
                    className="search-manufacturer__option"
                  >
                    No results.
                  </ComboboxOption>
                ) : (
                  // If we found something
                  filteredManufacturers.map(item => (
                    <ComboboxOption
                      key={item}
                      value={item}
                      className={({ focus }) => `relative search-manufacturer__option
                    ${focus ? 'bg-primary-blue text-white' : "text-gray-900"}
                    `}
                    >
                      {/* JS block with a destructured function inside */}
                      {({ selected, focus }) => (
                        <>
                          <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                            {item}
                          </span>

                          {/* Show an active blue background color if the option is selected */}
                          {selected ? (
                            <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${focus ? "text-white" : "text-pribg-primary-purple"}`}
                            ></span>
                          ) : null}
                        </>
                  )}
                    </ComboboxOption>
                  ))
                )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer