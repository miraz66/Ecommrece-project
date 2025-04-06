import ProductCard from "./ProductCard";

export default function NewProduct({ products }) {
    return (
        <div className="mx-auto max-w-2xl lg:max-w-8xl lg:px-8 py-16 px-4 lg:py-24">
            <div className="max-w-xl mx-auto text-center">
                <h3 className="text-3xl font-bold uppercase tracking-tight text-gray-800">
                    the New arrivals
                </h3>
                <p className="mt-2 text-gray-600 text-sm">Shop All Products</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
                {products
                    .filter((product) => product.is_new)
                    .slice(0, 10)
                    .map((product) => (
                        <div key={product.id}>
                            <ProductCard {...product} />
                        </div>
                    ))}
            </div>
        </div>
    );
}
