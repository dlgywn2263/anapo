import { Hospital, MonitorCheck } from "lucide-react";
const button = () => {
  return (
    <div className="flex flex-row absolute justify-center gap-8 container mx-auto  py-50 ">
      <button className="w-[350px] h-[350px]   rounded-2xl bg-[#B8D5FF] ">
        <div className="flex flex-col gap-2 items-center">
          <Hospital size={180} />
          <span className="text-4xl font-semibold">병원찾기</span>
        </div>
      </button>
      <button className="w-[350px] h-[350px]   rounded-2xl bg-[#B8D5FF] ">
        <div className="flex flex-col gap-2 items-center">
          <MonitorCheck size={180} />
          <span className="text-4xl font-semibold">진료예약</span>
        </div>
      </button>
      <div className="flex flex-col gap-2">
        <button className="w-[350px] h-[170px]   rounded-2xl bg-[#A4C9FC] ">
          <span className="text-white font-semibold text-4xl">회원가입</span>
        </button>
        <button className="w-[350px] h-[170px]   rounded-2xl bg-[#A4C9FC] ">
          <span className="text-white font-semibold text-4xl">로그인</span>
        </button>
      </div>
    </div>
  );
};

export default button;
