import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";

export default function ShowProduct() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="bg-slate-900">
            <Head title="Blog" />

            <Header
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            <div className="py-40 max-w-3xl mx-auto">
                <h1 className="text-4xl font-open uppercase text-gray-50 tracking-wider">
                    Sit voluptatem rhoncus
                </h1>
            </div>
        </div>
    );
}
