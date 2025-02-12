import BlogMain from "@/Components/BlogMain";
import Header from "@/Components/Header";
import BlogRight from "@/Components/Home/BlogRight";
import { Head } from "@inertiajs/react";
import { useState } from "react";

import blog_1 from "@/assets/blog-3-3.jpg";
import blog_2 from "@/assets/blog-7-1.jpg";
import blog_3 from "@/assets/blog-8-1.jpg";
import Footer from "@/Components/Footer";

const data = [
    {
        id: 1,
        head: "Travel",
        title: "The best places to visit in the world",
        image: blog_1,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sem vitae eros rhoncus ...",
        comment: "4",
        date: "2 days ago",
    },
    {
        id: 2,
        head: "Travel",
        title: "The best places to visit in the world",
        image: blog_2,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sem vitae eros rhoncus ...",
        comment: "1",
        date: "5 days ago",
    },
    {
        id: 3,
        head: "Travel",
        title: "The best places to visit in the world",
        image: blog_3,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sem vitae eros rhoncus ...",
        comment: "2",
        date: "3 days ago",
    },
    {
        id: 4,
        head: "Travel",
        title: "The best places to visit in the world",
        image: blog_1,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sem vitae eros rhoncus ...",
        comment: "4",
        date: "2 days ago",
    },
];

export default function Blog() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <Head title="Blog" />

            <div className="bg-slate-900">
                <Header
                    mobileMenuOpen={mobileMenuOpen}
                    setMobileMenuOpen={setMobileMenuOpen}
                />

                <div className="max-w-4xl mx-auto py-36">
                    <h3 className="text-base font-semibold uppercase tracking-tight text-gray-100">
                        Blog
                    </h3>
                    <p className="mt-2 text-white text-5xl font-bold tracking-wider">
                        The latest articles and news
                    </p>

                    <p className="mt-4 text-gray-300 tracking-wide">
                        Stay up-to-date with the latest industry news as our
                        marketing teams finds new ways to help you grow.
                    </p>
                </div>

                <div className="bg-white">
                    <div className="mx-auto max-w-2xl lg:max-w-8xl py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-4 gap-10">
                        <div className="col-span-3 space-y-8">
                            {data.map((item) => (
                                <BlogMain key={item.id} {...item} />
                            ))}
                        </div>

                        <BlogRight />
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
