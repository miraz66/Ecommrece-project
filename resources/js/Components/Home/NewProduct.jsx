import { StarIcon } from "@heroicons/react/24/solid";
import ProductImage from "@/assets/products-1-min.jpg";
import PrimaryButton from "../PrimaryButton";
import {
    HeartIcon,
    MagnifyingGlassCircleIcon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/outline";

const data = [
    {
        id: 1,
        title: "Digital Cameras",
        image: ProductImage,
        price: 100,
    },
    {
        id: 2,
        title: "Headphones",
        image: ProductImage,
        price: 50,
    },
    {
        id: 3,
        title: "Smart Watches",
        image: ProductImage,
        price: 200,
    },
    {
        id: 4,
        title: "Portable Audio",
        image: ProductImage,
        price: 150,
    },
    {
        id: 5,
        title: "Portable Audio",
        image: ProductImage,
        price: 150,
    },
];

export default function NewProduct() {
    return (
        <div className="mx-auto max-w-2xl lg:max-w-8xl lg:px-8 py-16 lg:py-24">
            <div className="max-w-xl mx-auto text-center">
                <h3 className="text-3xl font-bold uppercase tracking-tight text-gray-800">
                    the New arrivals
                </h3>
                <p className="mt-2 text-gray-600 text-sm">Shop All Products</p>
            </div>
            <div className="grid grid-cols-5 gap-6 mt-10">
                {data.map((item) => (
                    <div key={item.id}>
                        <div className="group relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded">
                            <div className="relative min-h-[308px] max-h-[308px]">
                                <img
                                    src={item.image}
                                    alt="Front of men's Basic Tee in black."
                                    className="object-cover w-full h-full"
                                />

                                <div className="absolute right-1.5 top-1.5 bg-white p-2 space-y-1 shadow">
                                    <div className="relative group/compare">
                                        <HeartIcon className="w-5 h-5 group/compare:hover:text-red-500" />
                                        <div className="absolute right-full mr-3.5 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-sm px-3 py-1.5 shadow-lg transition-opacity">
                                            <p>Compare</p>
                                            <div className="absolute top-1/2 transform -translate-y-1/2 h-2 w-2 bg-black rotate-45 -right-1"></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="relative compare">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="20"
                                            height="20"
                                            className="stroke-current text-gray-500 group-hover:text-red-500 cursor-pointer"
                                            fill="none"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="16 3 21 3 21 8"></polyline>
                                            <line
                                                x1="4"
                                                y1="20"
                                                x2="21"
                                                y2="3"
                                            ></line>
                                            <polyline points="21 16 21 21 16 21"></polyline>
                                            <line
                                                x1="15"
                                                y1="15"
                                                x2="21"
                                                y2="21"
                                            ></line>
                                            <line
                                                x1="4"
                                                y1="4"
                                                x2="9"
                                                y2="9"
                                            ></line>
                                        </svg>
                                        <div className="absolute right-full mr-3.5 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-sm px-3 py-1.5 shadow-lg transition-opacity">
                                            <p>Compare</p>
                                            <div className="absolute top-1/2 transform -translate-y-1/2 h-2 w-2 bg-black rotate-45 -right-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6">
                                <h3 className="text-gray-800 pb-1.5">
                                    {item.title}
                                </h3>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <StarIcon
                                            key={item}
                                            className="w-4 h-4 text-gray-200"
                                        />
                                    ))}
                                </div>
                                <p className="font-semibold text-gray-800 mt-2 group-hover:hidden">
                                    ${item.price}
                                </p>

                                <div className="flex justify-between pr-2 pt-2">
                                    <div className="flex gap-1 items-end group cursor-pointer duration-200 ease-in-out">
                                        <ShoppingBagIcon className="w-5 h-5 text-gray-800 group-hover:text-red-500" />
                                        <p className="text-xs text-gray-800 group-hover:text-red-500">
                                            Add to Cart
                                        </p>
                                    </div>
                                    <div className="flex gap-1 items-end group cursor-pointer">
                                        <MagnifyingGlassIcon className="w-5 h-5 text-gray-800 group-hover:text-red-500" />
                                        <p className="text-xs text-gray-800 group-hover:text-red-500">
                                            Quick View
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
