import banner from "@/assets/banner-5.jpg";
import PrimaryButton from "../PrimaryButton";

export default function SummerDiscountBlog() {
    return (
        <div
            className="flex-1 basis-1/2 min-h-[25rem] object-cover bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${banner})`,
            }}
        >
            <div className="max-4xl mx-auto text-center p-6">
                <p className="text-xl font-semibold uppercase tracking-tight text-gray-50">
                    Maxima Summer Smasher
                </p>
                <h2 className="text-5xl font-bold font-serif mt-4 text-white uppercase tracking-wide">
                    Up To 20% - 30% Off
                </h2>
                <PrimaryButton className="mt-8">Discover Now</PrimaryButton>
            </div>
        </div>
    );
}
