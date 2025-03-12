import clsx from "clsx";
import React, { useState } from "react";
import ImageModal from "./ImageModal";

const images = [
    "https://images.unsplash.com/photo-1741482529153-a98d81235d06?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1726137569758-fb5f8d47ae4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1741482529153-a98d81235d06?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1726137569758-fb5f8d47ae4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

    const handleImageClick = (src, event) => {
        const rect = event.target.getBoundingClientRect();
        setImagePosition({
            x: rect.left,
            y: rect.top,
            width: rect.width,
            height: rect.height,
        });
        setSelectedImage(src);
    };
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
                            "overflow-hidden rounded-3xl shadow-lg",
                            // Assign a repeating pattern for grid spans
                            index % 4 === 0 && "col-span-3",
                            index % 4 === 1 && "col-span-2",
                            index % 4 === 2 && "col-span-2",
                            index % 4 === 3 && "col-span-3"
                        )}
                    >
                        <img
                            src={src}
                            alt={`Image ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                ))}
            </div>

            {/* Image Modal */}
            <ImageModal
                selectedImage={selectedImage}
                imagePosition={imagePosition}
                onClose={() => setSelectedImage(null)}
            />
        </div>
    );
};

export default ImageGrid;
