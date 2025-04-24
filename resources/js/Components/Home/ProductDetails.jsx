import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import Product from "../Product";
import { useForm } from "@inertiajs/react";

const categories = [
    "Driveshafts",
    "Spools",
    "Headphones",
    "Portable Audio",
    "Tennis",
    "Video Games",
    "Uncategorized",
];

export default function ProductDetails({ product }) {
    const [quantity, setQuantity] = useState(1);
    const { data, setData, post } = useForm({
        product_id: product.id,
        quantity: quantity,
    });

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

    const addToCart = () => {
        post(route("add-to-cart"), {
            ...data,
        });

        // Reset quantity to 1 after adding to cart
        setQuantity(1);
    };

    useEffect(() => {
        setData("quantity", quantity);
    }, [quantity]);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-0 lg:max-w-8xl">
                <div className="lg:grid lg:grid-cols-7 lg:items-start lg:gap-x-8">
                    <div className="lg:col-span-3">
                        <Product product={product} />
                    </div>

                    <div className="mt-8 lg:mt-0 lg:col-span-4">
                        <h1 className="font-medium text-3xl text-gray-700">
                            {product.name}
                        </h1>
                        <p className="font-semibold text-xl py-4 text-gray-600">
                            ${product.price}
                        </p>
                        <p className="text-gray-600 text-sm max-w-sm leading-7">
                            {product.description}
                        </p>

                        <div className="mt-8">
                            <div className="flex items-center gap-4">
                                {/* Quantity Selector */}
                                <div className="inline-flex items-center border border-gray-300 overflow-hidden">
                                    <button
                                        className="bg-gray-100 text-black px-4 py-2 hover:bg-gray-200"
                                        onClick={decreaseQuantity}
                                    >
                                        -
                                    </button>

                                    <span className="px-4 py-2 w-12 text-center bg-white border-x border-gray-300">
                                        {quantity}
                                    </span>

                                    <button
                                        className="bg-gray-100 text-black px-4 py-2 hover:bg-gray-200"
                                        onClick={increaseQuantity}
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Add to Cart Button */}
                                <button
                                    onClick={addToCart}
                                    className="bg-red-600 text-white px-8 py-2.5 hover:bg-gray-800 transition"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-4">
                            <div className="flex items-center gap-1 text-red-600">
                                <HeartIcon size={20} />
                                <p className="text-sm">Wishlist</p>
                            </div>

                            <div className="flex items-center gap-1 text-gray-600">
                                <AdjustmentsHorizontalIcon className="w-5 h-5" />
                                <p className="text-sm">Compare</p>
                            </div>
                        </div>

                        <hr className="my-8" />

                        <div className="space-y-2">
                            <p className="text-sm text-gray-600 uppercase">
                                <strong>sku</strong>: wvn-14-123
                            </p>
                            <p className="text-sm text-gray-600 first-letter:uppercase">
                                <strong>categories</strong>:{" "}
                                <span className="space-x-1">
                                    {categories.map((category) => (
                                        <a
                                            key={category}
                                            href="#"
                                            className="text-gray-600 hover:underline"
                                        >
                                            {category},
                                        </a>
                                    ))}
                                </span>
                            </p>
                            <p className="text-sm text-gray-600 uppercase">
                                <strong>tags</strong>: <a href="#">Basic</a>,{" "}
                                <a href="#" className="hover:underline">
                                    Tee
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
