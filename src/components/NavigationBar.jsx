export default function NavigationBar() {
  return (
    <nav className="w-full h-[64px] fixed shadow-sm shadow-slate-200 border-white border-2 bg-white">
      <ul className=" flex w-full h-full">
        <li className=" border-red-200 flex h-full items-center">
          <span className="text-3xl px-4 text-center">LOGO</span>
        </li>
      </ul>
    </nav>
  );
}
