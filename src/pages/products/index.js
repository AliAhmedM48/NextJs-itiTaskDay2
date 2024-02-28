import ProdcutsComponent from '@/components/products/ProdcutsComponent';
import React from 'react';

export async function getStaticProps() {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return {
        props: {
            products: data
        }

    }
}

const index = ({ products }) => {
    return <div className='container'><ProdcutsComponent {...products} /></div>;
};

export default index;

