"use client"
import { AiOutlineMenu } from "react-icons/ai"
import Avatar from "../Avatar"
import { useCallback, useState } from "react"
const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = useCallback(() => {
        setIsOpen( (value) => !value);
    },[] )
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div onClick={() => {}}
        className="
        hidden
        md:block
        py-3
        px-4
        text-sm
        font-semibold
        rounded-full
        hover:bg-neutral-100
        tarnsition
        cursor-pointer
        "
        >
            Airbnb your home
        </div>
        <div onClick={toggleOpen}
        className="
        p-3
        md:py-1
        md:px-2
        border-[1px]
        border-neutral-200
        flex 
        flex-row
        items-center
        gap-3
        cursor-pointer
        transition
        hover:shadow-sm
        rounded-full
        "
        >
            <AiOutlineMenu />
            <div className="hidden md:block">
                <Avatar />
            </div>
        </div>
      </div>
      {isOpen && (
        <div className="
        obsolute
        roundex-xl
        shadow-md
        overflow:hidden
        bg-white
        w-[40vw]
        md:w-3/4
        right-0
        top-12
        ">
as
        </div>
      )}
    </div>
  )
}

export default UserMenu