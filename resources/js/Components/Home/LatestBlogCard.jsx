export default function LatestBlogCard({ title, image, description }) {
    return (
        <>
            <div className="mt-8 w-full h-full px-4">
                <div className="group relative">
                    <div className="flex justify-center items-center">
                        <img
                            src={image}
                            alt={title}
                            className="h-80 w-full flex-shrink-0 object-cover object-center"
                        />
                    </div>
                    <div className="space-y-2 bg-white px-6 pt-8 pb-6">
                        <h3 className="text-lg uppercase tracking-tight font-bold text-gray-600">
                            <a href="#">{title}</a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 leading-6 line-clamp-2">
                            {description}
                        </p>
                        <div className="mt-4">
                            <a
                                href="#"
                                className="text-gray-900 font-bold uppercase text-xs hover:text-red-600 hover:underline"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
