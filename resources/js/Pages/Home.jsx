import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import LatestBlog from "@/Components/Home/LatestBlog";
import NewProduct from "@/Components/Home/NewProduct";
import PopularCategories from "@/Components/Home/PopularCategories";
import ProductCategories from "@/Components/Home/ProductCategories";
import ProductGrid from "@/Components/Home/ProductGrid";
import ImageCarousel from "@/Components/Home/Sponsors";
import SummerDiscountBlog from "@/Components/Home/SummerDiscountBlog";
import Test from "@/Components/Home/Test";
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
                <SummerDiscountBlog />
                <LatestBlog />
                <ProductCategories />
                <ImageCarousel />
                <Footer />
            </div>
        </>
    );
}
