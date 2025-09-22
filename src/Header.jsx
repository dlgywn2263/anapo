import { Activity } from "lucide-react";
import Link from "next/link";
const Header = () => {
  return (
    <header className=" absolute w-full z-50  top-0 left-0  ">
      <nav className="container mx-auto py-5 ">
        <div className="flex flex-row items-center gap-5">
          <Link href={"/"}>
            <Activity size={40} color="white" />
          </Link>
          <h1 className="text-4xl text-white">anapo</h1>
        </div>
      </nav>
    </header>
  );
};

export default Header;
