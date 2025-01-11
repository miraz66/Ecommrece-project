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

export default function CartDropDown({ dropdownOpen }) {
    console.log(dropdownOpen);

    return (
        <>
            <div
                className={clsx(
                    "absolute right-0 top-[68px] overflow-hidden bg-white transition-all duration-700 ease-in-out",
                    dropdownOpen === "cart" ? "max-h-96" : "max-h-0"
                )}
            >
                <div className="p-6 flex flex-col gap-2 w-80">
                    <p className="text-sm text-gray-700 dark:text-gray-400 dark:hover:text-white">
                        No products in the cart.
                    </p>
                </div>
            </div>
        </>
    );
}
