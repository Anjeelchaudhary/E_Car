import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className='flex flex-col text-black-100 mt-5 border-gray-100'>
            <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16px-6 ру-10'>
                <div className='flex flex-coljustify-start items-start gap-6'>
                    <Image src="/logo.svg" alt="logo" width={118} height={18} className='object-contain' />
                    <p className="text-base text-gray-700 ">CarHub <br /> All rights reserved &copy;</p>
                </div>
            </div>
                <div className="footer__links">
                    {footerLinks.map((link) => (
                        <div key={link.title} className="footer__link">
                            <h3>{link.title}</h3>
                            {link.links.map((item) => (
                                <Link key={link.title} href={item.url} className="text-gray-500"> {item.title} </Link>
                            ))}
                        </div>
                    ))}

                </div>
                <div className="flex justify-center items-center flex-wrap mt-10 border-t border-gray-100  sm:px-16 px-6 py-10">
                    <p>@2023 CarHub . All rights reserved </p>
                    <div className="footer__copyrights-links">
                        <Link href='/' className="text-gray-500 ">Privacy Policy </Link>
                        <Link href='/' className="text-gray-500 ">Terms of use </Link>
                    </div>
                </div>
         
        </footer>
    )
}

export default Footer
