import { Link } from "@inertiajs/react";
import banner1 from "@/assets/banner1.jpg";
import banner2 from "@/assets/banner2.jpg";
import clsx from "clsx";

const DropDownValue = [
    {
        title: "Shop Layout",
        value: [
            "Shop Left Sidebar",
            "Shop Right Sidebar",
            "Shop Full Width",
            "Shop Full Width 100%",
            "Shop Both Sidebar",
        ],
    },
    {
        title: "Products Types",
        value: [
            "Simple Product",
            "Grouped Product",
            "Variable Product",
            "Virtual Product",
            "External Product",
            "Downloadable Product",
            "Subscription Product",
        ],
    },
    {
        title: "Pages",
        value: [
            "About Us",
            "Privacy Policy",
            "Frequently Questions",
            "Contact Us",
            "Login",
            "Register",
            "Error 404",
        ],
    },
];

export default function ShopDropDown({ item, dropdownOpen }) {
    return (
        <>
            <div className="relative">
                {item.name === "Shop" && (
                    <div
                        className={clsx(
                            "absolute right-0 transform -translate-x-1/3 -inset-x-3 z-10 w-screen overflow-hidden bg-white transition-all duration-700 ease-in-out shadow-2xl",
                            dropdownOpen === item.name ? "max-h-96" : "max-h-0"
                        )}
                    >
                        <div className="py-6 flex justify-start max-w-8xl mx-auto">
                            <div className="grid grid-cols-5 gap-4 w-full">
                                {DropDownValue.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-3"
                                    >
                                        <p className="text-sm font-semibold uppercase tracking-tight text-gray-900 dark:text-white">
                                            {item.title}
                                        </p>
                                        <div className="flex flex-col gap-3">
                                            {item.value.map((value, index) => (
                                                <Link
                                                    key={index}
                                                    className="text-sm text-gray-500 tracking-wide hover:text-red-600 hover:pl-1 duration-200 ease-in-out dark:text-gray-400 dark:hover:text-white"
                                                >
                                                    {value}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                <div>
                                    <img src={banner1} alt="banner" />
                                </div>

                                <div>
                                    <img src={banner2} alt="banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
