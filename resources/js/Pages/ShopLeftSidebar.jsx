import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import banner from "@/assets/banner2.jpg";
import SimpleProductCard from "@/Components/Home/SimpleProductCard";
import ProductImage from "@/assets/products-1-min.jpg";

const data = [
    "data-1",
    "data-2",
    "data-3",
    "data-1",
    "data-2",
    "data-3",
    "data-1",
    "data-2",
    "data-3",
    "data-1",
    "data-2",
    "data-3",
    "data-1",
];

const Categories = [
    {
        name: "Digital Cameras",
        tag: ["Uncategorized", "Video Games", "Women's"],
    },
    {
        name: "Football",
    },
    {
        name: "Headphones",
    },
    {
        name: "Portable Audio",
    },
    {
        name: "Men's",
    },
    {
        name: "Smart Watches",
    },
    {
        name: "Tennis",
    },
    {
        name: "Uncategorized",
    },
    {
        name: "Video Games",
    },
    {
        name: "Women's",
    },
];

const products = [
    {
        id: 1,
        title: "Basic Tee",
        imageUrl: ProductImage,
        discount: 20,
        rating: 0,
        price: 400,
    },
    {
        id: 2,
        title: "Basic Tee",
        imageUrl: ProductImage,
        rating: 4,
        price: 400,
    },
    {
        id: 3,
        title: "Basic Tee",
        imageUrl: ProductImage,
        discount: 20,
        rating: 1,
        price: 400,
    },
];

export default function ShopLeftSidebar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <Head title="shop-left-sidebar" />

            <div className="bg-white">
                <div className="bg-slate-900 h-[67px]">
                    <Header
                        mobileMenuOpen={mobileMenuOpen}
                        setMobileMenuOpen={setMobileMenuOpen}
                    />
                </div>

                <div className="max-w-8xl mx-auto grid grid-cols-4 my-14 gap-10">
                    <div className="col-span-1">
                        <div>
                            <div>
                                <h2 className="text-gray-600 uppercase font-semibold text-lg tracking-wide">
                                    Categories
                                </h2>
                                <div className="mt-2 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-red-600 after:bg-neutral-950/10 before:top-0 before:left-0 before:h-px before:w-28 after:top-0 after:right-0 after:left-28 after:h-px"></div>
                            </div>

                            <div className="space-y-4 mt-10">
                                {Categories.map((data, index) => (
                                    <div key={index}>
                                        <a
                                            href="#"
                                            className="text-sm tracking-wider text-gray-700 hover:text-red-600"
                                        >
                                            {data.name}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10">
                            <div>
                                <h2 className="text-gray-600 uppercase font-semibold text-lg tracking-wide">
                                    Tags
                                </h2>
                                <div className="mt-2 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-red-600 after:bg-neutral-950/10 before:top-0 before:left-0 before:h-px before:w-12 after:top-0 after:right-0 after:left-12 after:h-px"></div>
                            </div>

                            <div className="grid grid-cols-5 auto-rows-auto mt-8 gap-1.5">
                                {[1, 2, 3, 4, 5, 6].map((index) => (
                                    <button className="bg-gray-100 py-1.5 text-xs uppercase border rounded text-gray-600 hover:bg-red-500 hover:text-white duration-200 ease-in-out">
                                        Tag-0{index}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10">
                            <div>
                                <h2 className="text-gray-600 uppercase font-semibold text-lg tracking-wide">
                                    Categories
                                </h2>
                                <div className="mt-2 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-red-600 after:bg-neutral-950/10 before:top-0 before:left-0 before:h-px before:w-28 after:top-0 after:right-0 after:left-28 after:h-px"></div>
                                <p className="text-gray-400 text-sm py-6">
                                    No products to compare
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <button className="text-gray-400 text-sm tracking-wide hover:text-red-500">
                                    Clear all
                                </button>
                                <button className="text-sm bg-red-500 py-1.5 px-4 rounded text-white hover:bg-gray-800">
                                    Compare
                                </button>
                            </div>

                            <img
                                src={banner}
                                className="w-full h-96 my-14"
                                alt=""
                            />

                            <div className="space-y-4">
                                {products.map((item) => (
                                    <SimpleProductCard
                                        key={item.id}
                                        title={item.title}
                                        imageUrl={item.imageUrl}
                                        discount={item.discount}
                                        rating={item.rating}
                                        price={item.price}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3 grid grid-cols-3 auto-rows-auto gap-4">
                        {data.map((data, index) => (
                            <div key={index}>{data}</div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
