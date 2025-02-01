import { Dialog, DialogPanel } from "@headlessui/react";
import {
    Bars3Icon,
    HeartIcon,
    MagnifyingGlassIcon,
    ShoppingCartIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/boria_1.png";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import DropDown from "./DropDown/ShopDropDown";
import PageDropDown from "./DropDown/PageDropDown";
import CartDropDown from "./DropDown/CartDropDown";
import MenuDropDown from "./DropDown/MenuDropDown";

const navigation = [
    { name: "Home", href: "#" },
    { name: "Shop", href: "#", down: true },
    { name: "Blog", href: "#" },
    { name: "Page", href: "#", down: true },
    { name: "About us", href: "#" },
];

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
    const [dropdownOpen, setDropdownOpen] = useState("");

    return (
        <header className="absolute inset-x-0 top-0 z-50 max-w-8xl mx-auto">
            <nav
                aria-label="Global"
                className="flex items-center justify-between"
            >
                <div className="flex lg:flex-1 justify-between items-center">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img alt="" src={logo} className="h-8 w-auto" />
                    </a>

                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => {
                                    item.name === "Shop" &&
                                        setDropdownOpen(item.name);

                                    item.name === "Page" &&
                                        setDropdownOpen(item.name);
                                }}
                                onMouseLeave={() => {
                                    item.name === "Shop" && setDropdownOpen("");

                                    item.name === "Page" && setDropdownOpen("");
                                }}
                            >
                                <Link
                                    to={item.href}
                                    className="text-sm font-bold text-white flex py-4 lg:py-6"
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

                                {item.name === "Shop" && (
                                    <DropDown
                                        item={item}
                                        dropdownOpen={dropdownOpen}
                                    />
                                )}

                                {item.name === "Page" && (
                                    <div>
                                        <PageDropDown
                                            item={item}
                                            dropdownOpen={dropdownOpen}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="lg:-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-20">
                    <div className="w-2/4 flex gap-1 justify-between items-center">
                        <label htmlFor="search">
                            <MagnifyingGlassIcon
                                aria-hidden="true"
                                className="size-6 text-gray-200 font-bold hover:text-red-600 cursor-pointer"
                            />
                        </label>
                        <input
                            type="text"
                            id="search"
                            placeholder="Search for products..."
                            className="w-full px-3 py-1.5 bg-transparent text-gray-200 placeholder-gray-200 placeholder:text-sm border-none rounded-md focus:outline-none focus:ring-red-600 focus:border-red-600"
                        />
                    </div>

                    <div className="flex gap-4 items-center">
                        <div>
                            <div className="relative">
                                <HeartIcon
                                    aria-hidden="true"
                                    className="size-7 text-gray-100 hover:text-red-600 cursor-pointer duration-200 ease-in-out"
                                />

                                <span className="absolute -bottom-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-600 rounded-full">
                                    0
                                </span>
                            </div>
                        </div>

                        <div
                            onMouseMove={() => {
                                setDropdownOpen("cart");
                            }}
                            onMouseLeave={() => {
                                setDropdownOpen("");
                            }}
                            className="relative py-5"
                        >
                            <div className="relative">
                                <ShoppingCartIcon
                                    aria-hidden="true"
                                    className="size-7 text-gray-100 hover:text-red-600 cursor-pointer duration-200 ease-in-out"
                                />

                                <p className="absolute -bottom-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-600 rounded-full">
                                    0
                                </p>
                            </div>
                            <CartDropDown
                                item="cart"
                                dropdownOpen={dropdownOpen}
                            />
                        </div>

                        <div
                            className="relative"
                            onMouseMove={() => {
                                setDropdownOpen("menu");
                            }}
                            onMouseLeave={() => {
                                setDropdownOpen("");
                            }}
                        >
                            <Bars3Icon
                                aria-hidden="true"
                                className="size-7 text-gray-100 hover:text-red-600 cursor-pointer duration-200 ease-in-out"
                            />

                            <MenuDropDown
                                item="menu"
                                dropdownOpen={dropdownOpen}
                            />
                        </div>
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
