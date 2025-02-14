import blog_1 from "@/assets/blog-8-1-150x150.jpg";
import image_sidebar from "@/assets/img-sidebar.jpg";

const categories = ["Business", "Fashion", "Furniture", "Interior", "Travel"];
const RecentPost = [
    {
        image: blog_1,
        title: "Simple Post with format link.",
        date: "may 6, 2025",
    },
    {
        image: blog_1,
        title: "Simple Post with format link.",
        date: "may 6, 2025",
    },
    {
        image: blog_1,
        title: "Simple Post with format link.",
        date: "may 6, 2025",
    },
    {
        image: blog_1,
        title: "Simple Post with format link.",
        date: "may 6, 2025",
    },
    {
        image: blog_1,
        title: "Simple Post with format link.",
        date: "may 6, 2025",
    },
];

export default function BlogRight() {
    return (
        <div className="col-span-1 space-y-4">
            <div className="space-y-6">
                <div>
                    <h3 className="text-xl font-semibold uppercase tracking-tight text-gray-600">
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
                    <h3 className="text-xl font-semibold uppercase tracking-tight text-gray-600">
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
                    <h3 className="text-xl font-semibold uppercase tracking-tight text-gray-600">
                        Recent Posts
                    </h3>
                    <div className="mt-2 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-red-600 after:bg-neutral-950/10 before:top-0 before:left-0 before:h-px before:w-28 after:top-0 after:right-0 after:left-28 after:h-px"></div>
                </div>

                <div className="space-y-4">
                    {RecentPost.map((data, index) => (
                        <a
                            href="#"
                            key={index}
                            className="group flex items-center gap-4  border-b pb-4 last:border-b-0"
                        >
                            <div className="aspect-h-1 aspect-w-1 w-20 overflow-hidden">
                                <img
                                    src={data.image}
                                    alt="Front of men's Basic Tee in black."
                                    className="object-cover w-full h-14 group-hover:scale-105 duration-200 ease-in-out"
                                />
                            </div>

                            <div>
                                <h5 className="text-xs font-medium text-gray-600 group-hover:text-red-500 duration-200 ease-in-out">
                                    {data.title}
                                </h5>
                                <p className="text-sm text-gray-400">
                                    {data.date}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <div className="space-y-6 pt-8">
                <div>
                    <h3 className="text-xl font-semibold uppercase tracking-tight text-gray-600">
                        Archives
                    </h3>
                    <div className="mt-2 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-red-600 after:bg-neutral-950/10 before:top-0 before:left-0 before:h-px before:w-28 after:top-0 after:right-0 after:left-28 after:h-px"></div>
                </div>

                <div className="flex flex-col space-y-2">
                    <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-red-600 hover:pl-1 duration-200 ease-in-out dark:text-gray-400 dark:hover:text-white"
                    >
                        May 2025
                    </a>
                    <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-red-600 hover:pl-1 duration-200 ease-in-out dark:text-gray-400 dark:hover:text-white"
                    >
                        April 2025
                    </a>
                    <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-red-600 hover:pl-1 duration-200 ease-in-out dark:text-gray-400 dark:hover:text-white"
                    >
                        March 2025
                    </a>
                </div>
            </div>

            <div className="space-y-6 pt-8">
                <img
                    src={image_sidebar}
                    className="w-full"
                    alt="sidebar-image"
                />
            </div>
        </div>
    );
}
