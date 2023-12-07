"use client"

import { BiSearch } from "react-icons/bi"

const Search = () => {
  return (
    <div className="
    border-[1px]
    w-full
    md:w-auto
    py-2
    shadow-sm
    hover:shadow-md
    rounded-full
    transition
    cursor-pointer
    ">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibild px-6">
            anywhere
        </div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] text-center flex-1">
            any week
        </div>
        <div className="pl-6 pr-2 text-sm text-gray-600 flex flex-row items-center gap-3">
            <div className="hidden sm:block">Add Guests</div>
            <div className="p-2 rounded-full bg-rose-500 text-white">
                <BiSearch />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Search
