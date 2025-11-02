"use client";

import { Activity, User, Mail, Lock, MoveLeft, Phone } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
const Page = () => {
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };
  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="p-3 bg-blue-100 rounded-2xl items-center">
            <Activity color="#5CA0FF" size={38} />
          </div>

          <h1 className="font-bold text-2xl text-gray-900 ">
            anapo에 회원가입
          </h1>
          <span className="text-lg text-gray-600 ">
            건강한 의료 서비스의 시작
          </span>
        </div>
        <article className="flex justify-center mt-8">
          <div className="w-[500px] h-[900px]  rounded-2xl bg-white shadow-md flex flex-col items-center ">
            <h1 className="text-2xl mt-5 text-gray-600">회원가입</h1>

            <form onSubmit={handleSubmit} className="mt-10 ">
              {/* 이름 */}
              <div className="text-sm text-gray-900 mb-1">이름 *</div>
              <div className="relative flex items-center">
                <User className="absolute left-3  text-gray-400" size={20} />
                <input
                  type="email"
                  placeholder="이메일을 입력하세요"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="w-[420px] bg-gray-100  rounded-lg pl-10 pr-3 p-2"
                />
              </div>

              {/* 이메일 */}
              <div className="text-sm text-gray-900 mt-5">이메일 *</div>
              <div className="relative flex items-center">
                <Mail className="absolute left-3  text-gray-400" size={20} />
                <input
                  type="email"
                  placeholder="이메일을 입력하세요"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="w-[420px] bg-gray-100  rounded-lg pl-10 pr-3 p-2"
                />
              </div>

              {/* 비밀번호 */}
              <div className="text-sm text-gray-900 mb-1 mt-5">비밀번호 *</div>
              <div className="relative flex items-center">
                <Lock className="absolute left-3  text-gray-400" size={20} />
                <input
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-[420px] bg-gray-100  rounded-lg pl-10 pr-3 p-2"
                />
              </div>

              {/* 비밀번호 확인 */}
              <div className="text-sm text-gray-900 mb-1 mt-5">
                비밀번호 확인 *
              </div>
              <div className="relative flex items-center">
                <Lock className="absolute left-3  text-gray-400" size={20} />
                <input
                  type="password"
                  placeholder="비밀번호를 다시 입력하세요"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-[420px] bg-gray-100  rounded-lg pl-10 pr-3 p-2"
                />
              </div>
              {/* 전화번호 */}
              <div className="text-sm text-gray-900 mt-5">전화번호 </div>
              <div className="relative flex items-center">
                <Phone className="absolute left-3  text-gray-400" size={20} />
                <input
                  type="phone"
                  placeholder="010-1234-5678"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                  className="w-[420px] bg-gray-100  rounded-lg pl-10 pr-3 p-2"
                />
              </div>
              {/* 생년월일 */}
              <div className="flex justify-between">
                <div className="flex flex-col  text-md text-gray-600 mt-8">
                  <label className="  gap-3">생년월일</label>
                  <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    className="w-50 h-10 bg-gray-100 rounded-lg p-2"
                  />
                </div>
                {/* 성별 */}
                <div className="flex flex-col  text-md text-gray-600 mt-8">
                  <label className="  gap-3">성별</label>
                  <select className="bg-gray-100 rounded-lg w-50 h-10 p-2">
                    <option value="">선택</option>
                    <option value="male">남성</option>
                    <option value="female">여성</option>
                  </select>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-1">
                <label className="flex items-center flex-row gap-2 text-gray-600">
                  <input type="checkbox" className="accent-[#5CA0FF]" />
                  <span>이용약관에 동의합니다</span>
                </label>
                <label className="flex items-center space-x-2 text-gray-600">
                  <input type="checkbox" className="accent-[#5CA0FF]" />
                  <span>개인정보 처리방침에 동의합니다</span>
                </label>
                <label className="flex items-center space-x-2 text-gray-600">
                  <input type="checkbox" className="accent-[#5CA0FF]" />
                  <span>마케팅 정보 수신에 동의합니다 </span>
                </label>
              </div>
              <button className="w-[420px]  rounded-lg p-2 bg-[#5CA0FF] mt-8">
                <Link className=" text-white text-lg" href={"/main"}>
                  회원가입
                </Link>
              </button>
              <div className="flex justify-between items-center text-md text-gray-600 mt-8 ">
                <span>이미 계정이 있으신 가요?</span>
                <Link
                  className="text-blue-500 hover:underline"
                  href={"/main/login"}
                >
                  로그인
                </Link>
              </div>
            </form>
          </div>
        </article>
        <p className=" relative text-center text-sm text-gray-400 mt-8">
          <Link
            href="/main"
            className="hover:underline flex items-center justify-center "
          >
            <MoveLeft className=" absolute left-138 " size={18} /> 홈으로
            돌아가기
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Page;
