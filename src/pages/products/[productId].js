import ProductDetailsComponent from '@/components/products/ProductDetailsComponent';
import React from 'react';

export async function getStaticPaths() {
    return {
        paths: [
            { params: { productId: '1' } },
            { params: { productId: '2' } },
            { params: { productId: '3' } },
        ],
        fallback: 'blocking',
    }
}
export async function getStaticProps(context) {
    const { params } = context;
    console.log(params.productId);
    const res = await fetch('https://dummyjson.com/products/' + params.productId)
    const data = await res.json();
    return {
        props: {
            details: data
        },
        // notFound: true

    }
}


const ProductId = ({ details }) => {
    return <ProductDetailsComponent {...details} />;
};
export default ProductId;
