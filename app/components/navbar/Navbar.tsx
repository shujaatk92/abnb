import Container from "../Container"
import Logo from "./Logo"

const Navbar = () => {
    return(
        <nav className="fixed w-full shadow-sm z-10 bg-white">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between md:gap-0 gap-3">
                        <Logo />
                    </div>
                </Container>
            </div>
        </nav>
    )
}

export default Navbar