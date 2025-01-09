import Hero from "@/Components/Hero";
import { Head, Link } from "@inertiajs/react";

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <div className="bg-white font-openSans">
                <Hero />
            </div>
        </>
    );
}
