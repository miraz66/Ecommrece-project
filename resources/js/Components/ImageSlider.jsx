import clsx from "clsx";
import React, { useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slideImage from "../assets/slider1-store1.jpg";
import slideImage2 from "../assets/slider2-store1.jpg";

const properties = [
    {
        titleSmall: "Big Sound",
        titleLarge: "Portable Size",
        paragraph: "Free Sound or qualified orders over $100",
        image: slideImage,
    },
    {
        titleSmall: "Big Sound",
        titleLarge: "Portable Size",
        paragraph: "Free Sound or qualified orders over $100",
        image: slideImage2,
    },
];

const ImageSlider = () => {
    const slideRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="relative w-full">
            {/* Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                {properties.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => slideRef.current.goTo(index)}
                        className={clsx(
                            "w-4 h-4 rounded-full transition-all duration-300 border",
                            currentSlide === index
                                ? "bg-red-500 scale-110"
                                : "bg-gray-300 border-red-500 border"
                        )}
                    ></button>
                ))}
            </div>

            {/* Slide Component */}
            <Slide
                ref={slideRef}
                indicators={false} // Disable default indicators
                arrows={false}
                className="w-full"
                duration={10000}
                onChange={(previous, next) => setCurrentSlide(next)}
            >
                {properties.map((property, index) => (
                    <div
                        key={index}
                        className="relative bg-gray-200 py-32 text-3xl min-h-[60rem] select-none"
                        style={{
                            backgroundImage: `url(${property.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Animated content */}
                        <div className="mx-auto max-w-6xl h-[40rem] flex flex-col justify-center">
                            <div className="text-white">
                                <h2
                                    className={clsx(
                                        "text-6xl uppercase tracking-tight pb-3",
                                        currentSlide === index
                                            ? "translate-x-0 opacity-100"
                                            : "-translate-x-20 opacity-0",
                                        "transition-transform duration-700"
                                    )}
                                >
                                    {property.titleSmall}
                                </h2>
                                <h1
                                    className={clsx(
                                        "text-6xl font-bold uppercase tracking-tight pb-6",
                                        currentSlide === index
                                            ? "translate-x-0 opacity-100"
                                            : "-translate-x-40 opacity-0",
                                        "transition-transform duration-700"
                                    )}
                                >
                                    {property.titleLarge}
                                </h1>
                                <div
                                    className={clsx(
                                        "flex items-center gap-4",
                                        currentSlide === index
                                            ? "translate-x-0 opacity-100"
                                            : "-translate-x-40 opacity-0",
                                        "transition-transform duration-700"
                                    )}
                                >
                                    <div className="bg-white w-6 h-[1px]"></div>
                                    <p
                                        className={clsx(
                                            "text-lg",
                                            currentSlide === index
                                                ? "translate-x-0 opacity-100"
                                                : "-translate-x-40 opacity-0",
                                            "transition-transform duration-700"
                                        )}
                                    >
                                        {property.paragraph}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    className={clsx(
                                        "mt-8 inline-block rounded-md border border-transparent bg-button_primary px-8 py-3 text-center text-base font-semibold text-gray-950 hover:bg-button_primary_hover",
                                        currentSlide === index
                                            ? "translate-x-0 opacity-100"
                                            : "translate-y-10 opacity-0",
                                        "transition-transform duration-700 ease-in-out"
                                    )}
                                >
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default ImageSlider;
