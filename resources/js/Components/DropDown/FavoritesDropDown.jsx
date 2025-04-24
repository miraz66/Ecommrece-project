export default function FavoritesDropDown({ dropdownOpen, favorites }) {
    return (
        <>
            <div
                className={clsx(
                    "absolute right-0 top-[85px] w-[22rem] bg-white overflow-hidden shadow-xl transform transition-all duration-500 ease-in-out",
                    dropdownOpen === "favorite"
                        ? "max-h-[500px] opacity-100 scale-y-100"
                        : "max-h-0 opacity-0 scale-y-0"
                )}
                style={{ transformOrigin: "top" }}
            >
                {favorites === null ||
                favorites.length === 0 ||
                favorites.length === undefined ? (
                    <div className="w-[22rem] p-4 space-y-2 bg-gray-100 border-b border-gray-200 dark:border-gray-300">
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-600">
                            Your favorites is empty
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-500">
                            Add items to your favorites to see them here.
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col w-[22rem] bg-gray-100">
                        {favorites.map((favorite) => (
                            <div
                                key={favorite.id}
                                className="flex items-center justify-between border-b border-gray-200 dark:border-gray-300"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={favorite.image}
                                        alt="product"
                                        className="w-20 h-20 object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <h3 className="text-sm text-gray-800 dark:text-gray-600">
                                            {favorite.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-500">
                                            $ {favorite.price.toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
