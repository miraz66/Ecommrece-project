import Hero from "@/Components/Hero";
import NewProduct from "@/Components/Home/NewProduct";
import PopularCategories from "@/Components/Home/PopularCategories";
import ProductGrid from "@/Components/Home/ProductGrid";
import Opportunity from "@/Components/Opportunity";
import { Head, Link } from "@inertiajs/react";

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <div>
                <Hero />
                <Opportunity />
                <PopularCategories />
                <ProductGrid />
                <NewProduct />
            </div>
        </>
    );
}
