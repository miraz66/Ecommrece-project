const categories = ["Business", "Fashion", "Furniture", "Interior", "Travel"];

export default function BlogRight() {
    return (
        <div className="col-span-1 space-y-4">
            <div className="space-y-6">
                <div>
                    <h3 className="text-xl font-semibold uppercase tracking-tight text-gray-800">
                        Search
                    </h3>
                    <div className="mt-2 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-red-600 after:bg-neutral-950/10 before:top-0 before:left-0 before:h-px before:w-28 after:top-0 after:right-0 after:left-28 after:h-px"></div>
                </div>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-red-500"
                />
            </div>

            <div className="space-y-6 pt-8">
                <div>
                    <h3 className="text-xl font-semibold uppercase tracking-tight text-gray-800">
                        Categories
                    </h3>
                    <div className="mt-2 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-red-600 after:bg-neutral-950/10 before:top-0 before:left-0 before:h-px before:w-28 after:top-0 after:right-0 after:left-28 after:h-px"></div>
                </div>

                <div className="space-y-2">
                    {categories.map((item, index) => (
                        <div key={index}>
                            <a
                                href="#"
                                className="text-sm text-gray-500 hover:text-red-600 hover:pl-1 duration-200 ease-in-out dark:text-gray-400 dark:hover:text-white"
                            >
                                {item}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-6 pt-8">
                <div>
                    <h3 className="text-xl font-semibold uppercase tracking-tight text-gray-800">
                        Recent Posts
                    </h3>
                    <div className="mt-2 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-red-600 after:bg-neutral-950/10 before:top-0 before:left-0 before:h-px before:w-28 after:top-0 after:right-0 after:left-28 after:h-px"></div>
                </div>
            </div>
        </div>
    );
}
