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

export default function PageDropDown({ item, dropdownOpen }) {
    return (
        <>
            <div className="relative">
                {item.name === "Page" && (
                    <div
                        className={clsx(
                            "absolute left-0 overflow-hidden bg-white transition-all duration-700 ease-in-out",
                            dropdownOpen === item.name ? "max-h-96" : "max-h-0"
                        )}
                    >
                        <div className="p-4 flex flex-col gap-2 w-48">
                            {DropDownValue.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item}
                                    className="text-sm text-gray-500 hover:text-red-600 hover:pl-1 duration-200 ease-in-out dark:text-gray-400 dark:hover:text-white"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
