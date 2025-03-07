import { useState } from "react";
import ReviewFrom from "../ReviewFrom";

export default function BoughtTogether() {
    const [activeTab, setActiveTab] = useState("Description");

    const tabContent = {
        Description: (
            <>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse ultrices mauris diam, vel efficitur nisl
                    consectetur at. Nulla facilisi. Nullam eget erat ac mi
                    ultricies ultricies. Integer auctor, elit sit amet
                    consectetur ultricies, nunc nunc ultricies nunc, nec
                    ultricies nunc nunc nec nunc. Sed et eros ac nunc ultricies
                    ultricies. Nullam eget erat ac mi ultricies ultricies.
                    Integer auctor, elit sit amet consectetur ultricies, nunc
                    nunc ultricies nunc, nec ultricies nunc nunc nec nunc. Sed
                    et eros ac nunc ultricies ultricies.
                </p>
                <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse ultrices mauris diam, vel efficitur nisl
                    consectetur at. Nulla facilisi. Nullam eget erat ac mi
                    ultricies ultricies. Integer auctor, elit sit amet
                    consectetur ultricies, nunc nunc ultricies nunc, nec
                    ultricies nunc nunc nec nunc. Sed et eros ac nunc ultricies
                    ultricies. Nullam eget erat ac mi ultricies
                </p>
            </>
        ),
        Reviews: <ReviewFrom />,
        "About Brands":
            "Our brand focuses on delivering high-quality products. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Shipping & Returns": (
            <>
                <p>
                    Aliquam a tortor vel ligula auctor laoreet. Nullam
                    dignissim, arcu a tristique dictum, felis diam convallis
                    nunc, nec gravida tortor erat non lectus. Fusce odio erat,
                    dapibus sit amet suscipit quis, ultricies nec lectus. Nulla
                    a nunc posuere, facilisis metus ac, pulvinar urna. Curabitur
                    iaculis mi imperdiet, pellentesque odio ac, vehicula lacus.
                </p>
                <p className="mt-4">
                    Aenean finibus nunc vitae lacus mollis tincidunt. In vitae
                    rhoncus felis. Fusce convallis erat eget orci placerat,
                    vitae porta odio faucibus. Mauris lorem felis, lobortis ac
                    condimentum finibus, luctus eget ligula. Sed placerat dui
                    nulla, in condimentum dui mollis pretium. Suspendisse semper
                    turpis nec tempus gravida. Aenean a erat orci. Aliquam
                    semper diam nec maximus cursus.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-gray-800">
                    General Shipping Policies
                </h3>

                <p className="mt-4">
                    Pellentesque ut purus ullamcorper, porttitor lectus vitae,
                    vehicula nulla. Aenean vestibulum efficitur neque eu
                    fermentum. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia Curae; Integer placerat
                    ultrices odio sed tempus. In scelerisque mattis neque, ac
                    porttitor magna egestas eu. Nulla massa augue, placerat non
                    egestas sit amet, faucibus ac est. Curabitur id urna lacus.
                    Ut suscipit non nisl sit amet suscipit.
                </p>
            </>
        ),
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl lg:max-w-8xl py-16 lg:pb-24">
                <div className="max-w-xl mx-auto text-center">
                    <h3 className="text-3xl font-bold uppercase tracking-tight text-gray-800">
                        Frequently Bought Together
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm">
                        Shop All Products
                    </p>
                </div>

                {/* Products */}
                <div className="max-w-xl flex gap-4 mt-14">
                    <div className="flex gap-2 items-center">
                        <img
                            className="w-28 h-32"
                            src="https://i.ibb.co/3kZ3VZx/1.png"
                            alt=""
                        />
                        +{" "}
                        <img
                            className="w-28 h-32"
                            src="https://i.ibb.co/3kZ3VZx/1.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <h3 className="text-sm tracking-wide text-gray-600">
                            Price for all: $100.00
                        </h3>
                        <button className="bg-red-600 text-sm font-semibold py-2 px-4 text-white mt-4">
                            Add all to Cart
                        </button>
                    </div>
                </div>

                {/* Together Details */}
                <ul className="mt-8 text-gray-600 text-sm list-disc list-inside space-y-2">
                    <li>
                        This Product: Sit voluptatem rhoncus –{" "}
                        <strong>$50.00</strong>
                    </li>
                    <li>
                        Laudantium enim fringi – <strong>$50.00</strong>
                    </li>
                </ul>

                {/* Tabs Section */}
                <div className="">
                    <ul className="flex justify-center gap-10 bg-gray-100 mt-10 py-4 rounded">
                        {Object.keys(tabContent).map((tab) => (
                            <li
                                key={tab}
                                className={`cursor-pointer font-medium text-lg transition-colors hover:text-red-600 ${
                                    activeTab === tab
                                        ? "text-red-600"
                                        : "text-gray-800"
                                }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </li>
                        ))}
                    </ul>

                    {/* Display Active Tab Content */}
                    <div className="mt-6 text-gray-700 text-sm">
                        {tabContent[activeTab]}
                    </div>
                </div>
            </div>
        </div>
    );
}
