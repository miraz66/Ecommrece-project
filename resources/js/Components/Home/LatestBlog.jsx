import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import LatestBlogCard from "./LatestBlogCard";

import CategoriesImage1 from "@/assets/blog-3-3.jpg";

const data = [
    {
        id: 1,
        title: "Simple Post with format link",
        image: CategoriesImage1,
        description:
            "Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare susc",
    },
    {
        id: 2,
        title: "Simple Post with format link",
        image: CategoriesImage1,
        description:
            "Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare susc",
    },
    {
        id: 3,
        title: "Simple Post with format link",
        image: CategoriesImage1,
        description:
            "Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare susc",
    },
    {
        id: 4,
        title: "Simple Post with format link",
        image: CategoriesImage1,
        description:
            "Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare susc",
    },
    {
        id: 5,
        title: "Simple Post with format link",
        image: CategoriesImage1,
        description:
            "Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare susc",
    },
    {
        id: 6,
        title: "Simple Post with format link",
        image: CategoriesImage1,
        description:
            "Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare susc",
    },
];

export default function LatestBlog() {
    const customPrevArrow = (
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
            <ArrowLeftIcon className="h-6 w-6 text-gray-600" />
        </button>
    );

    const customNextArrow = (
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
            <ArrowRightIcon className="h-6 w-6 text-gray-600" />
        </button>
    );

    return (
        <div className="bg-primary">
            <div className="mx-auto max-w-2xl lg:max-w-8xl lg:px-8 pb-20">
                <div className="mx-auto max-w-2xl text-center pt-20">
                    <h3 className="text-3xl font-bold uppercase tracking-tight text-gray-800">
                        The Latest Blogs
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm">View All Post</p>
                </div>
                <div className="relative">
                    <Slide
                        slidesToScroll={2}
                        slidesToShow={3}
                        prevArrow={customPrevArrow}
                        nextArrow={customNextArrow}
                    >
                        {data.map((item) => (
                            <LatestBlogCard
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </Slide>
                </div>
            </div>
        </div>
    );
}
