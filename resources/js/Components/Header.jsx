import { Dialog, DialogPanel } from "@headlessui/react";
import {
    Bars3Icon,
    HeartIcon,
    ShoppingCartIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/boria_1.png";
import { Link } from "@inertiajs/react";

const navigation = [
    { name: "Home", href: "#" },
    { name: "Shop", href: "#", down: true },
    { name: "Blog", href: "#" },
    { name: "Page", href: "#", down: true },
    { name: "About us", href: "#" },
];

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
    return (
        <header className="absolute inset-x-0 top-0 z-50 max-w-[1500px] mx-auto">
            <nav
                aria-label="Global"
                className="flex items-center justify-between p-6 lg:px-8"
            >
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img alt="" src={logo} className="h-8 w-auto" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="text-sm font-bold text-white flex"
                        >
                            {item.name}

                            {item.down && (
                                <svg
                                    aria-hidden="true"
                                    className="ms-1 h-5 w-5 flex-none"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div className="flex gap-4">
                        <div className="relative">
                            <HeartIcon
                                aria-hidden="true"
                                className="size-7 text-white font-bold hover:text-red-600 cursor-pointer"
                            />
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center rounded-full bg-red-600 w-4 h-4 text-xs font-semibold text-white">
                                0
                            </span>
                        </div>

                        <div className="relative">
                            <ShoppingCartIcon
                                aria-hidden="true"
                                className="size-7 text-white font-bold hover:text-red-600 cursor-pointer"
                            />
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center rounded-full bg-red-600 w-4 h-4 text-xs font-semibold text-white">
                                0
                            </span>
                        </div>

                        <Bars3Icon
                            aria-hidden="true"
                            className="size-7 text-white font-bold hover:text-red-600 cursor-pointer"
                        />
                    </div>
                </div>
            </nav>
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden"
            >
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
