"use client"

import Image from "next/image"
import { useState } from "react"

import { SearchManufacturer } from "./"
import { useRouter } from "next/navigation"

const SearchButton = (
  {otherClasses}: {
    otherClasses: string
  }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
    />
  </button>
)

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const [model , setModel] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(manufacturer === "" && model === "") {
      return alert('Please fill in the search bar')
    } else {
      updateSearchParams(
        manufacturer.toLowerCase(),
        model.toLowerCase()
      )
    }
  }

  const updateSearchParams = (manufacturer: string, model: string) => {
    // Updating the URL parameters

    // Save the current search params
    const searchParams = new URLSearchParams(window.location.search)


    if(manufacturer) {
      searchParams.set('manufacturer', manufacturer)
    } else {
      searchParams.delete('manufacturer ')
    }

    if(model) {
      searchParams.set('model', model)
    } else {
      searchParams.delete('model ')
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    // Using the new pathname
    router.push(newPathname)
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
          <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
          />
          <SearchButton
            otherClasses="sm:hidden"
          />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="Car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={e => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden"/>
      </div>
      <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar