import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "@/assets/miraz.jpg";
export default function ImageRevealSlider() {
    const containerRef = useRef(null);
    const x = useMotionValue(0);

    // Constrain movement within the container
    const width = useTransform(x, (value) => `calc(50% + ${value}px)`);

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-md mx-auto rounded-lg overflow-hidden"
        >
            {/* Before Image (Full Color) */}
            <img src={Image} alt="Before" />

            {/* After Image (Grayscale) */}
            <motion.div
                className="absolute inset-0"
                style={{ width, overflow: "hidden" }}
            >
                <img
                    src={Image}
                    className="w-full h-full object-cover filter grayscale"
                    alt="After"
                />
            </motion.div>

            {/* Draggable Slider Handle */}
            <motion.div
                className="absolute inset-y-0 left-1/2 w-10 h-10 bg-white border rounded-full flex items-center justify-center cursor-ew-resize shadow-lg"
                drag="x"
                dragConstraints={containerRef}
                style={{ x }}
            >
                ⬌
            </motion.div>
        </div>
    );
}
