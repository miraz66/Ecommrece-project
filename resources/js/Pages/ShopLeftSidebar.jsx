import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";

export default function ShopLeftSidebar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <Head title="shop-left-sidebar" />

            <div className="bg-white">
                <div className="bg-slate-900 h-[67px]">
                    <Header
                        mobileMenuOpen={mobileMenuOpen}
                        setMobileMenuOpen={setMobileMenuOpen}
                    />
                </div>
            </div>
        </>
    );
}
