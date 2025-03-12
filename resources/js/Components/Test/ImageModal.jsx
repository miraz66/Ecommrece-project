import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageModal = ({ selectedImage, imagePosition, onClose }) => {
    if (!selectedImage) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.img
                    src={selectedImage}
                    alt="Selected"
                    initial={{
                        x: imagePosition?.x,
                        y: imagePosition?.y,
                        width: imagePosition?.width,
                        height: imagePosition?.height,
                    }}
                    animate={{
                        x: 0,
                        y: 0,
                        width: "40vw",
                        height: "auto",
                    }}
                    exit={{
                        x: imagePosition?.x,
                        y: imagePosition?.y,
                        width: imagePosition?.width,
                        height: imagePosition?.height,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="rounded-lg shadow-xl cursor-pointer"
                />
            </motion.div>
        </AnimatePresence>
    );
};

export default ImageModal;
