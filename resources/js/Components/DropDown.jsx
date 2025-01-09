import { Link } from "@inertiajs/react";
import React from "react";

export default function DropDown({ item, shopDropdownOpen }) {
    return (
        <div>
            <div className="relative">
                {item.name === "Shop" && (
                    <div
                        className={`absolute right-0 transform -translate-x-1/3 inset-x-1/2 z-10 w-screen overflow-hidden bg-white transition-all duration-500 ease-in-out ${
                            shopDropdownOpen ? "max-h-96" : "max-h-0"
                        }`}
                    >
                        <div className="py-4 flex justify-start max-w-7xl mx-auto">
                            <div>
                                <Link
                                    to="/category1"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Category 1
                                </Link>
                                <Link
                                    to="/category2"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Category 2
                                </Link>
                                <Link
                                    to="/category3"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Category 3
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
