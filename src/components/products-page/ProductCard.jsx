import { Link } from "react-router-dom";

export default function ProductCard({ name, image, id }) {
  return (
    <Link to={`/product-details/${id}`}>
      <div className="w-full overflow-hidden text-center h-full flex flex-col items-center justify-center rounded-xl border-b-3 border-white hover:scale-105 transition-all duration-200 ease-in shadow-lg">
        <div className="overflow-hidden  rounded-2xl">
          <img src={image} alt={"image of " + name} />
        </div>
        <div className="py-4 bg-blue-300 w-full">
          <span className="font-semibold text-lg">{name}</span>
        </div>
      </div>
    </Link>
  );
}
