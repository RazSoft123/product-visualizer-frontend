import ProductCanvas3D from "./ProductCanvas3D";

export default function ProductDetailsSection() {
  return (
    <section className="product-details-section pt-[100px]">
      <h2 className="text-4xl font-bold text-center py-8">Product Details</h2>
      <div>
        <ProductCard />
      </div>
    </section>
  );
}

function ProductCard() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-8">
      {/* Left: Image */}
      <div className="min-w-[320px] min-h-[420px] flex-1 flex items-center justify-center overflow-hidden rounded-2xl">
        <ProductCanvas3D modelUrl="/chair_2.glb" />
      </div>

      {/* Right: Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-1">Barstool</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">₹20000</p>

          <p className="font-semibold">Brands</p>
          <p className="text-gray-600 mb-4">VIMANI</p>

          <p className="font-semibold">Dimensions:</p>
          <p className="text-gray-600 mb-4">cm (L) x cm (B) x cm (H)</p>

          <p className="font-semibold">Description</p>
          <p className="text-gray-600">
            H No. 736, Ashok Vihar, Phase 1, Sector 5, Gurgaon, Gurugram-122001,
            Haryana, India
          </p>
        </div>
      </div>
    </div>
  );
}
