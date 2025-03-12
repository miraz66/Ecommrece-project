import { motion } from "framer-motion";

export default function ArticleCard({ article }) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
        >
            <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent p-6 flex flex-col justify-end">
                <p className="text-xs uppercase font-bold text-white opacity-80">
                    {article.category}
                </p>
                <h3 className="text-lg font-semibold text-white">
                    {article.title}
                </h3>
            </div>
        </motion.div>
    );
}
