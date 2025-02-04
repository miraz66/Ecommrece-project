import banner from "@/assets/banner-5.jpg";
import PrimaryButton from "../PrimaryButton";

export default function SummerDiscountBlog() {
    return (
        <div
            className="flex-1 basis-1/2 object-cover bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${banner})`,
            }}
        >
            <div className="max-4xl mx-auto text-center px-6 py-14 lg:py-20">
                <p className="lg:text-xl font-semibold uppercase tracking-tight text-gray-50">
                    Maxima Summer Smasher
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold font-serif mt-2 lg:mt-4 text-white uppercase tracking-wide">
                    Up To 20% - 30% Off
                </h2>
                <PrimaryButton className="mt-6 lg:mt-8">
                    Discover Now
                </PrimaryButton>
            </div>
        </div>
    );
}
