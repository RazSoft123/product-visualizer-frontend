import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import LoadingSpinner from "../LoadingSpinner";

// Sample data for the product card
// const productData = [
//   {
//     name: "Chair 1",
//     img: "./chair_1.jpg",
//     model: "./chair_1.glb",
//   },
// ];

export default function ProductSection() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    let productData;
    console.log("Featching producsts");
    async function fetchProducts() {
      try {
        let res = await fetch("http://localhost:8080/api/products");
        productData = await res.json();

        if (productData.status === "success") {
          setProducts(productData.data);
        }
      } catch (error) {
        console.log("error ", error);
      }

      console.log("product data ", productData);
    }
    fetchProducts();
  }, []);

  if (!products) {
    return <LoadingSpinner />;
  }

  return (
    <section className="pt-[150px] pb-[100px] w-full flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-[80%]">
        {products.map((product) => {
          return (
            <ProductCard
              name={product.name}
              id={product.id}
              image={product.image}
              key={product.id}
            />
          );
        })}
      </div>
    </section>
  );
}
