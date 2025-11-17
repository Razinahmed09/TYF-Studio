import ShopDetailsMain from '@/pages/shop/shop-details-main';
import { PageParamsProps } from '@/types/custom-d-t';
import product_data from '@/data/product-data';
import React from 'react';

// 1️⃣ REQUIRED FOR STATIC EXPORT
export async function generateStaticParams() {
    return product_data.map((item) => ({
        id: item.id.toString(),
    }));
}

// 2️⃣ SEO metadata
export async function generateMetadata({ params }: PageParamsProps) {
    const { id } = await params;
    const product = product_data.find((item) => item.id === Number(id));

    return {
        title: product?.title ? product.title : "Product Details",
    };
}

// 3️⃣ PAGE COMPONENT
export default async function ProductDetails({ params }: PageParamsProps) {
    const { id } = await params;

    return <ShopDetailsMain id={id} />;
}
