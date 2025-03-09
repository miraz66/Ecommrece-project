import { Data } from "@/assets/ProductData";
import ProductCard from "./Home/ProductCard";

export default function RelatedProducts() {
    return (
        <div className="bg-white">
            <h2 className="text-3xl font-open uppercase text-gray-900 tracking-tight font-bold text-center">
                Related Products
            </h2>
            <div className="max-w-8xl mx-auto mt-10 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                {Data.slice(0, 4).map((item) => (
                    <div key={item.id}>
                        <ProductCard {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
}
