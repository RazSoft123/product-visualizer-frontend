import ProductCard from "./ProductCard";

// const productData = [
//   {
//     name: "Chair 1",
//     img: "./chair_1.jpg",
//     model: "./chair_1.glb",
//   },
// ];

export default function ProductSection() {
  return (
    <section className="pt-[150px] pb-[100px] w-full flex items-center justify-center">
      <div className="grid grid-cols-4 gap-4 w-[80%]">
        <ProductCard name="Chair 1" image="./chair_1.jpg" />
        <ProductCard name="Chair 1" image="./chair_1.jpg" />
        <ProductCard name="Chair 1" image="./chair_1.jpg" />
        <ProductCard name="Chair 1" image="./chair_1.jpg" />
        <ProductCard name="Chair 1" image="./chair_1.jpg" />
      </div>
    </section>
  );
}
