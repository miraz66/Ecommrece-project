import React from "react";

const ProductCard = ({ title, description, imageUrl, bgColor, link }) => {
    return (
        <div
            className={`flex flex-col justify-between items-center p-6 text-center`}
            style={{ backgroundColor: bgColor }}
        >
            <div className="">
                <img src="" alt="" />
            </div>
            <div className=""></div>
        </div>
    );
};

export default ProductCard;
