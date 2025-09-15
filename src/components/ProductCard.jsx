export default function ProductCard({ name, image }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center rounded-xl border-1 ">
      <div className="overflow-hidden  rounded-2xl">
        <img src={image} alt={"image of " + name} />
      </div>
      <div>
        <span>Product Name</span>
      </div>
    </div>
  );
}
