import FreeShippingLogo from "@/assets/freeshipping.png";
import ManyBackLogo from "@/assets/money-back.png";
import SafePaymentLogo from "@/assets/safe-payment.png";
import LoyaltyCustomerLogo from "@/assets/loyalty-customer.png";

const data = [
    {
        title: "Free Shipping",
        image: FreeShippingLogo,
        description:
            "Get 10% cash back, free shipping, free returns, and more at 1000+ top retailers!",
    },
    {
        title: "30 DAYS MONEY BACK",
        image: ManyBackLogo,
        description:
            "100% satisfaction guaranteed, or get your money back within 30 days!",
    },
    {
        title: "Safe Payment",
        image: SafePaymentLogo,
        description:
            "Pay with the world’s most popular and secure payment methods.",
    },
    {
        title: "loyalty customer",
        image: LoyaltyCustomerLogo,
        description:
            "Card for the other 30% of their purchases at a rate of 1% cash back.",
    },
];

export default function Opportunity() {
    return (
        <>
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-8xl lg:px-8 grid grid-cols-4 gap-10">
                {data.map((item) => (
                    <div key={item.title} className="mt-12 w-full h-full">
                        <div className="group relative">
                            <div className="flex justify-center items-center">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-20 w-20 flex-shrink-0 object-cover object-center"
                                />
                            </div>
                            <div className="space-y-2 text-center pt-5">
                                <h3 className="text-lg uppercase tracking-tight font-medium text-gray-700">
                                    <a href="#">
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        />
                                        {item.title}
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500 leading-6">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
