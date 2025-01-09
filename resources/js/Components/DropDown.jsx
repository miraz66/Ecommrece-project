import React from "react";

export default function DropDown() {
    return (
        <div>
            <div className="relative">
                {item.name === "Shop" && (
                    <div
                        className={`absolute left-1/2 transform -translate-x-1/2 inset-x-0 z-10 w-screen overflow-hidden bg-white transition-all duration-500 ease-in-out ${
                            shopDropdownOpen ? "max-h-96" : "max-h-0"
                        }`}
                    >
                        <div className="py-4 flex justify-center max-w-7xl mx-auto">
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
