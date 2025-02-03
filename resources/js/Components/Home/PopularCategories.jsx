import CategoriesImage1 from "@/assets/categories-1.jpg";
import CategoriesImage2 from "@/assets/categories-2.jpg";
import CategoriesImage3 from "@/assets/categories-3.jpg";
import CategoriesImage4 from "@/assets/categories-4.jpg";
import PrimaryButton from "../PrimaryButton";

const data = [
    {
        id: 1,
        title: "Digital cameras",
        image: CategoriesImage1,
    },
    {
        id: 2,
        title: "Headphones",
        image: CategoriesImage2,
    },
    {
        id: 3,
        title: "Smart Watches",
        image: CategoriesImage3,
    },
    {
        id: 4,
        title: "Portable Audio",
        image: CategoriesImage4,
    },
];

export default function PopularCategories() {
    return (
        <div className="mx-auto max-w-2xl lg:max-w-8xl lg:px-8 py-16 lg:py-24">
            <div className="text-center">
                <h1 className="text-3xl font-bold uppercase tracking-tight text-gray-800">
                    Popular Categories
                </h1>
                <p className="mt-4 text-gray-600">Shop All Products</p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {data.map((item) => (
                    <div key={item.id} className="bg-gray-100 rounded">
                        <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded">
                            <img
                                src={item.image}
                                alt="Front of men's Basic Tee in black."
                                className="object-cover w-full"
                            />
                            <div className="absolute bottom-4 inset-0 flex items-end justify-center lg:p-4">
                                <PrimaryButton className="text-xs px-1 py-1">
                                    {item.title}
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
