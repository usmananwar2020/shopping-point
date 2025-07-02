import { useEffect, useState } from "react";
import BannerSlider from "../../components/bannerSlider";
import ProductCard from "../../shared/productCard";
import type { Product } from "../../utils/interface";
import { useCart } from "../../context/cartContext";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { dispatch } = useCart();

  useEffect(() => {
    fetch("/productData.json")
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  return (
    <div>
      <BannerSlider />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};

export default Products;
