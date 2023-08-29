import Link from "next/link"
import Image from "next/image"
import { CustomButton } from "."

const Navbar = () => {
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center">
                <Link href="/" className="flex justify-center items-center ">
                    <Image
                        src="./logo.svg"
                        alt="carLogo"
                        width={118}
                        height={18}
                        className="object-contain" />
                </Link>
                <CustomButton
                    title="Login"
                    btntype="button"
                    containerStyle="text-primary-blue rounded-full bg-white min-w-[130]" />
            </nav>
        </header>
    )
}

export default Navbar
