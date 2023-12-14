"use client"
import Container from "../Container"
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"
import React from "react"
import { SafeUser } from "@/app/types"
import Categories from "./Categories"

interface NavbarProps {
    currentUser?: SafeUser | null
}
const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) => {
    return(
        <nav className="fixed w-full shadow-sm z-10 bg-white">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between md:gap-0 gap-3">
                        <Logo />
                        <Search />
                        <UserMenu currentUser={currentUser}/>
                    </div>
                </Container>
            </div>
            <Categories />
        </nav>
    )
}

export default Navbar