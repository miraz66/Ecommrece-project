import { useState, useRef } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import product_1 from "../assets/products-1-min.jpg";
import product_2 from "../assets/products-4-min.jpg";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

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
    const [startIndex, setStartIndex] = useState(0);
    const slideRef = useRef(null);
    const visibleThumbnails = 4; // Show 4 thumbnails at a time
    const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

    // Move the thumbnail scroll left
    const scrollLeft = () => {
        setStartIndex((prev) => Math.max(0, prev - 1));
    };

    // Move the thumbnail scroll right
    const scrollRight = () => {
        setStartIndex((prev) =>
            Math.min(products.length - visibleThumbnails, prev + 1)
        );
    };

    const handleMouseMove = (e) => {
        const { left, top, width, height } =
            e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setHoverPos({ x, y });
    };

    return (
        <div className="w-full mx-auto">
            {/* Main Product Display */}
            <div
                className="relative bg-gray-200 text-3xl select-none bg-cover bg-center"
                onMouseMove={handleMouseMove}
            >
                <Slide
                    ref={slideRef}
                    arrows={false}
                    autoplay={false}
                    onChange={(previous, next) => setSelectedIndex(next)}
                >
                    {products.map((item, index) => (
                        <div
                            key={item.id}
                            className="w-full h-full flex justify-center items-center"
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className={`w-full h-full object-cover transition-transform duration-300 ${
                                    selectedIndex === index ? "scale-105" : ""
                                }`}
                                style={{
                                    transform: `scale(1.1) translate(${
                                        (hoverPos.x - 50) / 10
                                    }%, ${(hoverPos.y - 50) / 10}%)`,
                                    transition: "transform 0.2s ease-out",
                                }}
                            />
                        </div>
                    ))}
                </Slide>
            </div>

            {/* Thumbnails with Left & Right Navigation */}
            <div className="flex gap-2 items-center justify-center mt-4">
                {/* Left Button */}
                <button
                    className={` ${
                        startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={scrollLeft}
                    disabled={startIndex === 0}
                >
                    <ChevronLeft size={24} className="text-gray-800" />
                </button>

                {/* Thumbnails Container with Animation */}
                <div className="w-full overflow-hidden relative">
                    <div
                        className="flex gap-4 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${startIndex * 132}px)`,
                        }} // 132px = thumbnail image width 128 + 4 gap
                    >
                        {products.map((item, index) => (
                            <img
                                key={item.id}
                                src={item.src}
                                alt={item.alt}
                                className={`w-32 h-32 object-cover cursor-pointer transition-all duration-300 ${
                                    selectedIndex === index
                                        ? "border border-red-500"
                                        : ""
                                }`}
                                onClick={() => slideRef.current.goTo(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Button */}
                <button
                    className={` ${
                        startIndex + visibleThumbnails >= products.length
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                    }`}
                    onClick={scrollRight}
                    disabled={startIndex + visibleThumbnails >= products.length}
                >
                    <ChevronRight size={24} className="text-gray-800" />
                </button>
            </div>
        </div>
    );
}
