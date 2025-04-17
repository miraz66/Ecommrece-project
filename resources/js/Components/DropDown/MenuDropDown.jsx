import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import clsx from "clsx";
const DropDownValue = [
    "About Us",
    "Privacy Policy",
    "Frequently Questions",
    "Contact Us",
    "Login",
    "Register",
    "Error 404",
];

export default function MenuDropDown({ dropdownOpen }) {
    return (
        <>
            <div
                className={clsx(
                    "absolute right-0 top-[48px] overflow-hidden bg-white transition-all duration-700 ease-in-out shadow-xl",
                    dropdownOpen === "menu" ? "max-h-96" : "max-h-0"
                )}
            >
                <div className="p-6 flex flex-col gap-6 w-40">
                    <div className="space-y-2">
                        <p className="text-lg text-gray-600 tracking-tight font-medium dark:text-gray-400 dark:hover:text-white">
                            My Account
                        </p>
                        <div className="flex items-center gap-1">
                            <ArrowRightEndOnRectangleIcon className="w-5 h-5 text-gray-400" />
                            <Link
                                href="#"
                                className="text-sm text-gray-400 hover:text-red-600 hover:pl-1 duration-200 ease-in-out dark:text-gray-400 dark:hover:text-white"
                            >
                                Sing in / Join
                            </Link>
                        </div>
                    </div>
                    <hr />
                    <div className="space-y-2">
                        <p className="text-lg text-gray-600 tracking-tight font-medium dark:text-gray-400 dark:hover:text-white">
                            Language
                        </p>
                        <div className="flex flex-col gap-2">
                            <Link
                                href="#"
                                className="text-sm text-gray-400 hover:text-red-600 hover:pl-1 duration-200 ease-in-out dark:text-gray-400 dark:hover:text-white"
                            >
                                English
                            </Link>
                            <Link
                                href="#"
                                className="text-sm text-gray-400 hover:text-red-600 hover:pl-1 duration-200 ease-in-out dark:text-gray-400 dark:hover:text-white"
                            >
                                Bangla
                            </Link>
                        </div>
                    </div>

                    <hr />

                    <div className="space-y-2">
                        <p className="text-lg text-gray-600 tracking-tight font-medium dark:text-gray-400 dark:hover:text-white">
                            Currency
                        </p>
                        <div className="flex flex-col gap-2">
                            <Link
                                href="#"
                                className="text-sm text-gray-400 hover:text-red-600 hover:pl-1 duration-200 ease-in-out dark:text-gray-400 dark:hover:text-white"
                            >
                                USD
                            </Link>
                            <Link
                                href="#"
                                className="text-sm text-gray-400 hover:text-red-600 hover:pl-1 duration-200 ease-in-out dark:text-gray-400 dark:hover:text-white"
                            >
                                BDT
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
