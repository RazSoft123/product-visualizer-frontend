import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import LoadingSpinner from "../LoadingSpinner";
import ProductCanvas3D from "./ProductCanvas3D";

export default function ProductDetailsSection() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    let productData;
    async function fetchProduct() {
      try {
        let res = await fetch(`http://localhost:8080/api/products/${id}`);
        productData = await res.json();

        if (productData.status === "success") {
          setProduct(productData.data);
        }
      } catch (error) {
        console.log("error ", error);
      }

      console.log("product data ", productData);
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return <LoadingSpinner />;
  }

  return (
    <section className="product-details-section pt-[100px]">
      <h2 className="text-4xl font-bold text-center py-8">Product Details</h2>
      <div>
        <ProductCard data={product} />
      </div>
    </section>
  );
}

function ProductCard({ data }) {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-8">
      {/* Left: Image */}
      <div className="min-w-[320px] min-h-[420px] flex-1 flex items-center justify-center overflow-hidden rounded-2xl">
        <ProductCanvas3D modelUrl={data.model} />
      </div>

      {/* Right: Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-1">{data.name}</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">
            ₹ {data.price}
          </p>

          <p className="font-semibold">Category:</p>
          <p className="text-gray-600 mb-4">{data.category}</p>

          <p className="font-semibold">Description</p>
          <p className="text-gray-600">{data.description}</p>
        </div>
      </div>
    </div>
  );
}
