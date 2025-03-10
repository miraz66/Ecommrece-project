import { motion } from "framer-motion";

export default function AppCard({ app, onClick }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }} // Hover effect
            whileTap={{ scale: 0.95 }} // Tap effect
            className="relative bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 cursor-pointer"
            onClick={() => onClick(app)}
        >
            <img
                src={app.icon}
                alt={app.name}
                className="w-16 h-16 rounded-lg mb-2"
            />
            <h3 className="text-lg font-semibold">{app.name}</h3>
            <p className="text-gray-500 text-sm">{app.category}</p>
        </motion.div>
    );
}
