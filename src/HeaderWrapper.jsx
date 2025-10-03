// components/HeaderWrapper.jsx
// "use client";

// import { usePathname } from "next/navigation";
// import { useState, useEffect } from "react";
// import StartHeader from "@/src/StartHeader";
// import MainHeader from "@/src/MainHeader";
// import MainHeaderLoggedIn from "@/src/MainHeaderLoggedIn";

// export default function HeaderWrapper() {
//   const pathname = usePathname();
//   const [isLoggedIn, setIsLoggedIn] = useState(flase);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   const isStartPage = pathname == "/" || pathname == "/landing";

//   if (isStartPage) {
//     <StartHeader />;
//   } else {
//     isLoggedIn ? <MainHeaderLoggedIn /> : <MainHeader />;
//   }
// }
