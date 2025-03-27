import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const ImageModal = ({ data, imagePosition, textColors, onClose }) => {
    if (!data || !imagePosition) return null;

    const handleCloseAnimation = (event) => {
        if (event.target !== event.currentTarget) return;
        onClose();
    };

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                    opacity: 0,
                    transition: { duration: 0.5, ease: "easeInOut" },
                }}
                onClick={handleCloseAnimation}
            >
                <motion.div
                    initial={{
                        x: imagePosition.x - window.innerWidth / 2,
                        y: imagePosition.y - window.innerHeight / 2,
                        width: imagePosition.width,
                        height: imagePosition.height,
                    }}
                    animate={{
                        x: 0,
                        y: 0,
                        width: "40vw",
                        height: "auto",
                    }}
                    exit={{
                        x: imagePosition.x - window.innerWidth / 2,
                        y: imagePosition.y - window.innerHeight / 2,
                        width: imagePosition.width,
                        height: imagePosition.height,
                    }}
                    onClick={(e) => e.stopPropagation()}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="rounded-3xl shadow-xl"
                >
                    <div className="relative w-full h-full">
                        <img
                            src={data.src}
                            alt={data.title}
                            className="w-full h-full object-cover rounded-3xl"
                        />

                        <div className="absolute top-0 p-4">
                            <h3
                                className={clsx(
                                    textColors[data.src],
                                    "text-xl font-semibold p-2 rounded-xl"
                                )}
                            >
                                {data.title}
                            </h3>
                            <p
                                className={clsx(
                                    textColors[data.src],
                                    "text-sm font-semibold p-2 rounded"
                                )}
                            >
                                {data.description}
                            </p>
                        </div>

                        <div className="absolute bottom-0 right-0 p-4">
                            <button
                                className={clsx(
                                    "text-sm font-semibold p-2 rounded",
                                    textColors[data.src]
                                )}
                            >
                                Live Demo
                            </button>

                            <button
                                className={clsx(
                                    "text-sm font-semibold p-2 rounded ml-2",
                                    textColors[data.src]
                                )}
                            >
                                Source Code
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ImageModal;
