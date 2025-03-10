import { motion } from "framer-motion";

export default function AppDetails({ app, onClose }) {
    if (!app) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
            onClick={onClose}
        >
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 w-full max-w-sm text-center"
            >
                <img
                    src={app.icon}
                    alt={app.name}
                    className="w-20 h-20 mx-auto rounded-lg mb-4"
                />
                <h2 className="text-2xl font-bold">{app.name}</h2>
                <p className="text-gray-500">{app.category}</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {app.description}
                </p>
                <button
                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg"
                    onClick={onClose}
                >
                    Close
                </button>
            </motion.div>
        </motion.div>
    );
}
