import React, { useEffect, useState } from "react";
import { fetchUnsplashPhotos } from "../../utils/unsplashApi"; // Import API function

import clsx from "clsx";

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

const ImageRowGrid = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const query = "girl"; // Change this dynamically if needed

    useEffect(() => {
        const loadPhotos = async () => {
            try {
                const data = await fetchUnsplashPhotos(query);
                setPhotos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadPhotos();
    }, [query]); // Dependency array ensures API is called on query change

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    console.log(photos);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">
                Image Gallery
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-row-5 gap-8">
                {photos.map((src, index) => (
                    <div
                        key={index}
                        className={clsx(
                            "overflow-hidden shadow-lg max-h-[36rem]",
                            // Assign a repeating pattern for grid spans
                            index % 4 === 0 && "row-span-5",
                            index % 4 === 1 && "row-span-2",
                            index % 4 === 2 && "row-span-5",
                            index % 4 === 3 && "row-span-2"
                        )}
                    >
                        <img
                            src={src.urls.regular}
                            // src={src}
                            alt={`Image ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageRowGrid;
