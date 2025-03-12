import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AppCard from "../Components/Test/AppCard";
import AppDetails from "../Components/Test/AppDetails";
import ImageGrid from "@/Components/Test/ImageGrid";

const apps = [
    {
        id: 1,
        name: "Spotify",
        category: "Music",
        icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
        description: "Stream your favorite music anywhere.",
    },
    {
        id: 2,
        name: "Instagram",
        category: "Social",
        icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
        description: "Share moments with friends and family.",
    },
    {
        id: 3,
        name: "Netflix",
        category: "Entertainment",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png",
        description: "Watch movies and TV shows anytime.",
    },
];

const articles = [
    {
        id: 1,
        category: "TRAVEL",
        title: "5 Inspiring Apps for Your Next Trip",
        image: "https://images.unsplash.com/photo-1741482529153-a98d81235d06?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        size: "col-span-2 row-span-2",
    },
    {
        id: 2,
        category: "HOW TO",
        title: "Contemplate the Meaning of Life Twice a Day",
        image: "https://images.unsplash.com/photo-1741482529153-a98d81235d06?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        size: "col-span-1 row-span-1",
    },
    {
        id: 3,
        category: "STEPS",
        title: "Urban Exploration Apps for the Vertically-Inclined",
        image: "https://images.unsplash.com/photo-1741482529153-a98d81235d06?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        size: "col-span-1 row-span-1",
    },
    {
        id: 4,
        category: "HATS",
        title: "Take Control of Your Hat Life With This Stunning New App",
        image: "https://images.unsplash.com/photo-1741482529153-a98d81235d06?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        size: "col-span-2 row-span-1",
    },
];

export default function Test() {
    const [selectedApp, setSelectedApp] = useState(null);

    return (
        <div className="mx-auto max-w-2xl lg:max-w-6xl px-4 lg:px-8 py-16 lg:py-24">
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center p-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    iOS App Store Clone
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {apps.map((app) => (
                        <AppCard
                            key={app.id}
                            app={app}
                            onClick={setSelectedApp}
                        />
                    ))}
                </div>

                {/* App Details Modal */}
                <AnimatePresence>
                    {selectedApp && (
                        <AppDetails
                            app={selectedApp}
                            onClose={() => setSelectedApp(null)}
                        />
                    )}
                </AnimatePresence>
            </div>

            <ImageGrid />
        </div>
    );
}
