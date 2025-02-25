import { useState, useRef } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import product_1 from "../assets/products-1-min.jpg";
import product_2 from "../assets/products-4-min.jpg";

const products = [
    { id: 1, src: product_1, alt: "Product 1" },
    { id: 2, src: product_2, alt: "Product 2" },
    { id: 3, src: product_1, alt: "Product 3" },
    { id: 4, src: product_2, alt: "Product 4" },
    { id: 5, src: product_1, alt: "Product 5" },
    { id: 6, src: product_2, alt: "Product 6" },
];

export default function Product() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const slideRef = useRef(null);

    const prevImage = () => {
        const newIndex =
            selectedIndex === 0 ? products.length - 1 : selectedIndex - 1;
        setSelectedIndex(newIndex);
        slideRef.current.goTo(newIndex);
    };

    const nextImage = () => {
        const newIndex =
            selectedIndex === products.length - 1 ? 0 : selectedIndex + 1;
        setSelectedIndex(newIndex);
        slideRef.current.goTo(newIndex);
    };

    return (
        <div className="w-full max-w-lg mx-auto">
            {/* Main Product Display */}
            <div className="relative h-96 bg-gray-100 rounded-lg flex justify-center items-center overflow-hidden">
                <Slide
                    ref={slideRef}
                    indicators={false} // Disable default indicators
                    arrows={false}
                    className="w-full h-full absolute top-0 left-0"
                    duration={10000}
                    autoplay={false}
                    onChange={(previous, next) => setSelectedIndex(next)}
                >
                    {products.map((item) => (
                        <img
                            key={item.id}
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-full object-contain"
                        />
                    ))}
                </Slide>

                {/* Navigation Buttons */}
                <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                >
                    <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                >
                    <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex items-center justify-center gap-3 mt-4">
                {products.map((item, index) => (
                    <img
                        key={item.id}
                        src={item.src}
                        alt={item.alt}
                        className={`w-16 h-16 object-cover cursor-pointer transition-all ${
                            selectedIndex === index
                                ? "border-2 border-red-500 scale-105"
                                : "border border-gray-300"
                        }`}
                        onClick={() => {
                            setSelectedIndex(index);
                            slideRef.current.goTo(index);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
