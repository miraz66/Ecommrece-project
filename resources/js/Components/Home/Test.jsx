import {
    MagnifyingGlassIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export default function Test() {
    return (
        <div>
            <div className="flex justify-between pr-2 pt-2">
                <div className="flex gap-1 items-end group/cart cursor-pointer duration-200 ease-in-out">
                    <ShoppingBagIcon className="w-5 h-5 text-gray-800 group-hover/cart:text-red-500" />
                    <p className="text-xs text-gray-800 group-hover/cart:text-red-500">
                        Add to Cart
                    </p>
                </div>
                <div className="flex gap-1 items-end group/quick cursor-pointer">
                    <MagnifyingGlassIcon className="w-5 h-5 text-gray-800 group-hover/quick:text-red-500" />
                    <p className="text-xs text-gray-800 group-hover/quick:text-red-500">
                        Quick View
                    </p>
                </div>
            </div>
        </div>
    );
}
