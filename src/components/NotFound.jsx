import NavigationBar from "./NavigationBar";

export default function NotFound() {
  return (
    <>
      <NavigationBar />
      <div className="pt-[150px]">
        <h1 className="text-4xl w-full text-center text-black">
          Page not found
        </h1>
      </div>
    </>
  );
}
