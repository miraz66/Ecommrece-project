import { useState } from "react";
import Header from "./Header";
import ImageSlider from "./ImageSlider";

export default function Hero({ carts }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="bg-white">
            <Header
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                carts={carts}
            />

            <ImageSlider />
        </div>
    );
}
