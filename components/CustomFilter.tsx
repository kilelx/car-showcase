"use client"

import { Fragment, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react"
import { CustomFilterProps } from "@/types"
import { updateSearchParams } from "@/utils"

const CustomFilter = ({title, options}: CustomFilterProps) => {

  const router = useRouter();

  // Select the first option by default, an empty value
  const [selected, setSelected] = useState(options[0])

    // update the URL search parameters and navigate to the new URL
    const handleUpdateParams = (e: { title: string; value: string }) => {
      const newPathName = updateSearchParams(title, e.value.toLowerCase());
  
      // Trigger SSR
      router.push(newPathName, {scroll: false});
    };

  return (
    <div className="w-fit">
      <Listbox
      // Check headlessui documentation
        value={selected}
        onChange={e => {
          setSelected(e);
          handleUpdateParams(e)
        }}
      >
        <div className="relative w-fit z-10">
          <ListboxButton className="custom-filter__btn" >
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron up down"
            />
          </ListboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="custom-filter__options">
              {options.map((option) => (
                <ListboxOption
                  key={option.title}
                  value={option}
                  className={({active}) => `relative cursor-default select-nonepy-4 px-2 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                >
                  {({selected}) => (
                     <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {option.title}
                     </span>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter