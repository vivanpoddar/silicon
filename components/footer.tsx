import Link from "next/link";
import Image from "next/image"

const Footer = (): JSX.Element => {
    return (
        <footer className="bg-gray-800 shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center w-auto mb-4 space-x-2 rtl:space-x-reverse">
                        <div className="h-10 w-10">
                            <Image src="/image.png" width={32} height={64} layout="responsive" alt="Silicon" />
                        </div>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium">
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6 text-white">About</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6 text-white">Join</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6 text-white">Management</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline text-white">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 text-white border-gray-700 lg:my-8" />
                <span className="block text-sm text-white">© 2023 <Link href="joinsilicon.org" className="hover:underline">Silicon Foundation</Link><br></br>Website by Vivan Poddar</span>
            </div>
        </footer>
    )
}

export default Footer;