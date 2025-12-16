import products from "../data/products";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";

const ProductList = () => {
  const { category, maxPrice } = useContext(FilterContext);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      category === "All" || product.category === category;

    const priceMatch = product.price <= maxPrice;

    return categoryMatch && priceMatch;
  });
  return (
    <div className="px-4 py-4 min-h-screen grid w-full grid-cols-1 gap-6 sm:grid-cols-3 md:w-full md:grid-cols-4 lg:grid-cols-5 bg-neutral-200">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
