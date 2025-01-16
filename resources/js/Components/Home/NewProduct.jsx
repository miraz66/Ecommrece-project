import ProductImage from "@/assets/products-1-min.jpg";
import ProductCard from "./ProductCard";

const data = [
    {
        id: 1,
        title: "Digital Cameras",
        imageUrl: ProductImage,
        price: 100,
        discount: 20,
        rating: 1,
        stock: 10,
    },
    {
        id: 2,
        title: "Headphones",
        imageUrl: ProductImage,
        price: 50,
        discount: 10,
        rating: 4,
        stock: 10,
    },
    {
        id: 3,
        title: "Smart Watches",
        imageUrl: ProductImage,
        price: 200,
        rating: 4,
        stock: 10,
    },
    {
        id: 4,
        title: "Portable Audio",
        imageUrl: ProductImage,
        price: 150,
        rating: 5,
        stock: 0,
    },
    {
        id: 5,
        title: "Portable Audio",
        imageUrl: ProductImage,
        price: 150,
        rating: 1,
        stock: 10,
    },
    {
        id: 6,
        title: "Portable Audio",
        imageUrl: ProductImage,
        price: 150,
        discount: 20,
        rating: 4,
        stock: 10,
    },
    {
        id: 7,
        title: "Portable Audio",
        imageUrl: ProductImage,
        price: 150,
        rating: 2,
        stock: 10,
    },
    {
        id: 8,
        title: "Portable Audio",
        imageUrl: ProductImage,
        price: 150,
        rating: 4,
        stock: 10,
    },
    {
        id: 9,
        title: "Portable Audio",
        imageUrl: ProductImage,
        price: 150,
        rating: 4,
        stock: 10,
    },
    {
        id: 10,
        title: "Portable Audio",
        imageUrl: ProductImage,
        price: 150,
        rating: 3,
        stock: 10,
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
                        <ProductCard {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
}
