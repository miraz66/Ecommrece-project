import React from "react";
import banner1 from "@/assets/banner-1-1.jpg";
import banner2 from "@/assets/img2-middle-store1.jpg";
import banner3 from "@/assets/banner1.jpg";
import banner4 from "@/assets/banner2.jpg";
import PrimaryButton from "../PrimaryButton";

const ProductGrid = () => {
    return (
        <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div
                className="flex-1 basis-1/2 min-h-[50rem] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${banner1})`,
                }}
            >
                <div className="flex flex-col justify-center p-6 text-center pt-24">
                    <h3 className="text-lg font-medium uppercase tracking-tight text-gray-100">
                        20% Off ! Limited week deal
                    </h3>
                    <h2 className="text-4xl font-bold mt-2 text-white uppercase tracking-wide">
                        Camera YooSee YS200
                    </h2>
                    <div>
                        <PrimaryButton className="mt-6">
                            Discover Now
                        </PrimaryButton>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col flex-1 basis-1/2">
                <div
                    className="flex-1 basis-1/2 min-h-[25rem] object-cover bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${banner2})`,
                    }}
                >
                    <div className="pl-20 mt-40">
                        <p className="text-lg font-semibold uppercase tracking-tight text-gray-50">
                            Sam sung
                        </p>
                        <h3 className="max-w-72 text-4xl font-bold mt-2 text-white tracking-wide">
                            Wireless Black Headphone
                        </h3>
                        <button className="text-white uppercase text-sm font-bold mt-6 border-b hover:border-red-600 hover:text-red-600 duration-200 ease-in-out">
                            Discover Now
                        </button>
                    </div>
                </div>
                <div className="md:flex justify-between min-h-[25rem]">
                    <img src={banner4} className="h-full" alt="Banner image" />
                    <img src={banner3} className="h-full" alt="Banner image" />
                </div>
            </div>
        </div>
    );
};

export default ProductGrid;
