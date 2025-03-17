import clsx from "clsx";
import { useEffect, useState } from "react";
import ImageModal from "./ImageModal";

const images = [
    "https://images.unsplash.com/photo-1741482529153-a98d81235d06?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1726137569758-fb5f8d47ae4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1736611717961-909a6653e6ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1729771222046-c05d55ada736?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1741482529153-a98d81235d06?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1741482529153-a98d81235d06?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1741482529153-a98d81235d06?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1741482529153-a98d81235d06?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1741482529153-a98d81235d06?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1741482529153-a98d81235d06?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const ImageGrid = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePosition, setImagePosition] = useState(null);
    const [textColors, setTextColors] = useState({}); // Store text colors for each image

    const handleImageClick = (src, event) => {
        const rect = event.target.getBoundingClientRect();
        setImagePosition({
            x: rect.left + rect.width / 2, // Center x
            y: rect.top + rect.height / 2, // Center y
            width: rect.width,
            height: rect.height,
        });
        setSelectedImage(src);
    };

    const handleCloseModal = () => {
        const rect = document.body.getBoundingClientRect();
        setImagePosition({
            x: rect.left + rect.width / 2, // Center x
            y: rect.top + rect.height / 2, // Center y
            width: rect.width,
            height: rect.height,
        });
        setSelectedImage(null);
    };

    useEffect(() => {
        images.forEach((src) => {
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.src = src;

            img.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0, img.width, img.height);

                // Get pixel data
                const imageData = ctx.getImageData(
                    0,
                    0,
                    img.width,
                    img.height
                ).data;
                let totalBrightness = 0;
                let pixelCount = imageData.length / 4;

                for (let i = 0; i < imageData.length; i += 4) {
                    const brightness =
                        0.299 * imageData[i] +
                        0.587 * imageData[i + 1] +
                        0.114 * imageData[i + 2];
                    totalBrightness += brightness;
                }

                const avgBrightness = totalBrightness / pixelCount;
                setTextColors((prevColors) => ({
                    ...prevColors,
                    [src]: avgBrightness > 128 ? "text-black" : "text-white",
                }));
            };
        });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">
                Image Gallery
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {images.map((src, index) => (
                    <div
                        key={index}
                        onClick={(event) => handleImageClick(src, event)}
                        className={clsx(
                            "overflow-hidden rounded-3xl",
                            // Assign a repeating pattern for grid spans
                            index % 4 === 0 && "col-span-3",
                            index % 4 === 1 && "col-span-2",
                            index % 4 === 2 && "col-span-2",
                            index % 4 === 3 && "col-span-3"
                        )}
                    >
                        {selectedImage === src ? null : (
                            <div
                                className="h-[26rem] w-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${src})` }}
                            >
                                <div className="p-4">
                                    <h3
                                        className={clsx(
                                            textColors[src],
                                            "text-xl font-semibold"
                                        )}
                                    >
                                        Sun Printing company
                                    </h3>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Image Modal */}
            <ImageModal
                selectedImage={selectedImage}
                imagePosition={imagePosition}
                onClose={handleCloseModal}
            />
        </div>
    );
};

export default ImageGrid;
