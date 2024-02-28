import React from "react";
import ProductsCardComponent from "./ProductsCardComponent";

const ProdcutsComponent = (props) => {
  const { products } = props;
  return (
    <div className="text-center">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-4'>
        {products.map((product) => (
          <ProductsCardComponent key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProdcutsComponent;
