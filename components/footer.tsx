import Link from "next/link";
import Image from "next/image"

const Footer = (): JSX.Element => {
    return (
        <footer className="bg-white shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center w-auto mb-4 sm:mb-0 space-x-2 rtl:space-x-reverse">
                        <img src="/image.png" className="h-10" alt="Silicon" />
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6">About</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6">Join</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6">Management</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="joinsilicon.org" className="hover:underline">Silicon Foundation</Link><br></br>Website by Vivan Poddar</span>
            </div>
        </footer>
    )
}

export default Footer;