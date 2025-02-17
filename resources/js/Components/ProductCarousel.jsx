import { useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import product_1 from "@/assets/products-1-min.jpg";
import product_2 from "@/assets/products-4-min.jpg";

const products = [
    { id: 1, src: product_1, alt: "Product 1" },
    { id: 2, src: product_2, alt: "Product 2" },
    { id: 3, src: product_1, alt: "Product 3" },
    { id: 4, src: product_2, alt: "Product 4" },
    { id: 5, src: product_1, alt: "Product 5" },
    { id: 6, src: product_2, alt: "Product 6" },
];

export default function ProductCarousel() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const nextImage = () => {
        setSelectedIndex((prev) => (prev + 1) % products.length);
    };

    const prevImage = () => {
        setSelectedIndex(
            (prev) => (prev - 1 + products.length) % products.length
        );
    };

    return (
        <div className="w-full max-w-lg mx-auto">
            {/* Main Image */}
            <div className="relative">
                <img
                    src={products[selectedIndex].src}
                    alt="Product"
                    className="w-full h-96 object-contain bg-gray-100"
                />
                {/* Zoom Button */}
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md">
                    <Search size={18} />
                </button>
            </div>

            {/* Thumbnail Carousel */}
            <div className="flex items-center gap-2 mt-4">
                <button
                    onClick={prevImage}
                    className="p-2 bg-gray-200 rounded-full"
                >
                    <ChevronLeft size={20} />
                </button>

                <div className="flex overflow-x-auto gap-2">
                    {products.map((item, index) => (
                        <img
                            key={item.id}
                            src={item.src}
                            alt="Thumbnail"
                            className={`w-16 h-16 object-cover cursor-pointer rounded-lg ${
                                selectedIndex === index
                                    ? "border-2 border-red-500"
                                    : ""
                            }`}
                            onClick={() => setSelectedIndex(index)}
                        />
                    ))}
                </div>

                <button
                    onClick={nextImage}
                    className="p-2 bg-gray-200 rounded-full"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
}
