import Hero from "@/Components/Hero";
import Opportunity from "@/Components/Opportunity";
import { Head, Link } from "@inertiajs/react";

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <div>
                <Hero />
                <Opportunity />
            </div>
        </>
    );
}
