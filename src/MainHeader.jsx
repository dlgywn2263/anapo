import { Activity } from "lucide-react";
import Link from "next/link";

const MainHeader = () => {
  return (
    <header className="w-full shadow-md shadow-black/10 z-10 relative">
      <nav className=" container mx-auto px-3 py-3  flex justify-between items-center">
        <Link className="flex flex-row items-center gap-3" href={"/main"}>
          <Activity size={38} color="#5CA0FF" />
          <span className="text-2xl font-semibold text-[#5CA0FF]">anapo</span>
        </Link>

        <ul className=" flex flex-row items-center gap-8">
          <li>
            <Link href={"/main/findhospital"}>병원찾기</Link>
          </li>
          <li>
            <Link href={"/main/reservationmed"}>진료예약</Link>
          </li>
          <li>
            <Link href={"/main/faq"}>고객센터</Link>
          </li>
        </ul>

        <div className="flex flex-row gap-1.5 ">
          <button className=" border-1 border-gray-400 rounded-md px-3 py-1 text-[14px] text-gray-900">
            <Link href={"/main/login"}>로그인</Link>
          </button>
          <button className=" border-1  border-[#5CA0FF] bg-[#5CA0FF] rounded-md px-3 py-1 text-[14px] text-white">
            <Link href={"/main/join"}>회원가입</Link>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
