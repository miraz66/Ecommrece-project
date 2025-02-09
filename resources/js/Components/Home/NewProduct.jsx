import ProductImage from "@/assets/products-1-min.jpg";
import ProductCard from "./ProductCard";
import { Data } from "@/assets/ProductData";

export default function NewProduct() {
    return (
        <div className="mx-auto max-w-2xl lg:max-w-8xl lg:px-8 py-16 px-4 lg:py-24">
            <div className="max-w-xl mx-auto text-center">
                <h3 className="text-3xl font-bold uppercase tracking-tight text-gray-800">
                    the New arrivals
                </h3>
                <p className="mt-2 text-gray-600 text-sm">Shop All Products</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
                {Data.slice(0, 10).map((item) => (
                    <div key={item.id}>
                        <ProductCard {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
}
