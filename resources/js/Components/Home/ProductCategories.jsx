import React from "react";
import SimpleProductCard from "./SimpleProductCard";
import ProductImage from "@/assets/products-1-min.jpg";

const products = [
    {
        featured: [
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
        ],
        bestSale: [
            {
                id: 1,
                title: "Basic Tee",
                imageUrl: ProductImage,
                discount: 20,
                rating: 5,
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
                rating: 2,
                price: 400,
            },
        ],
        onSale: [
            {
                id: 1,
                title: "Basic Tee",
                imageUrl: ProductImage,
                rating: 0,
                price: 400,
            },
            {
                id: 2,
                title: "Basic Tee",
                imageUrl: ProductImage,
                rating: 4,
                price: 100,
            },
            {
                id: 3,
                title: "Basic Tee",
                imageUrl: ProductImage,
                discount: 20,
                rating: 4,
                price: 400,
            },
        ],
    },
];

export default function ProductCategories() {
    return (
        <div className="mx-auto max-w-2xl lg:max-w-8xl lg:px-8 py-16 lg:py-24">
            {products.map((product, index) => (
                <div key={index} className="grid grid-cols-3 gap-4">
                    <div className="space-y-8">
                        <div className="pb-8">
                            <h1 className="text-xl font-bold uppercase tracking-wide text-gray-800">
                                Featured Products
                            </h1>
                            <p className="mt-2 text-gray-500 text-sm">
                                Shop All Products
                            </p>
                        </div>
                        {product.featured.map((item) => (
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

                    <div className="space-y-8">
                        <div className="pb-8">
                            <h1 className="text-xl font-bold uppercase tracking-wide text-gray-800">
                                Featured Products
                            </h1>
                            <p className="mt-2 text-gray-500 text-sm">
                                Shop All Products
                            </p>
                        </div>
                        {product.bestSale.map((item) => (
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

                    <div className="space-y-8">
                        <div className="pb-8">
                            <h1 className="text-xl font-bold uppercase tracking-wide text-gray-800">
                                Featured Products
                            </h1>
                            <p className="mt-2 text-gray-500 text-sm">
                                Shop All Products
                            </p>
                        </div>
                        {product.onSale.map((item) => (
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
            ))}
        </div>
    );
}
