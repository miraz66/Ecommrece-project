import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MultiCarousel = ({ children, data }) => {
    const [index, setIndex] = useState(0);
    const itemsPerPage = 4;
    const totalSlides = Math.ceil(data.length / itemsPerPage);

    const nextSlide = () => {
        setIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
    };

    const prevSlide = () => {
        setIndex((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
            {/* Left Button */}
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full z-10"
                onClick={prevSlide}
            >
                <ChevronLeft />
            </button>

            {/* Image Wrapper */}
            <div className="overflow-hidden">
                <motion.div
                    className="flex gap-4"
                    animate={{ x: `-${index * 100}%` }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                    {children}
                </motion.div>
            </div>

            {/* Right Button */}
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full z-10"
                onClick={nextSlide}
            >
                <ChevronRight />
            </button>
        </div>
    );
};

export default MultiCarousel;
