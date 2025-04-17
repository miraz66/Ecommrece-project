import { Link } from "@inertiajs/react";
import clsx from "clsx";

export default function CartDropDown({ dropdownOpen, carts }) {
    return (
        <>
            <div
                className={clsx(
                    "absolute right-0 top-[68px] overflow-hidden bg-white transition-all duration-700 ease-in-out shadow-xl",
                    dropdownOpen === "cart" ? "max-h-96" : "max-h-0"
                )}
            >
                <div className="p-6 flex flex-col gap-2 w-80">
                    {carts?.length > 0 ? (
                        carts.map((cart, index) => (
                            <div key={index} className="text-black">
                                {cart.name}
                            </div>
                        ))
                    ) : (
                        <div className="text-black">Your cart is empty</div>
                    )}
                </div>
            </div>
        </>
    );
}
