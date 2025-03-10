import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AppCard from "../Components/Test/AppCard";
import AppDetails from "../Components/Test/AppDetails";

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

export default function Test() {
    const [selectedApp, setSelectedApp] = useState(null);
    return (
        <div className="mx-auto max-w-2xl lg:max-w-8xl px-4 lg:px-8 py-16 lg:py-24">
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
        </div>
    );
}
