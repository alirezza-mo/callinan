import React from "react";
import Header from "../../Components/Header/Header";
import { Link, Outlet } from "react-router-dom";

import { IoPersonCircleOutline } from "react-icons/io5";
import { TbPasswordFingerprint } from "react-icons/tb";

function Main() {
  return (
    <>
      <main className="w-full  bg-yellow-400 flex flex-col">
        <Header />
        <section className="flex items-center justify-start mt-20 p-5 gap-10">
          <div className="flex flex-col items-center justify-center bg-gray-700 p-3 rounded-lg m-2 w-[400px]">
            <div className="flex gap-4 text-slate-200">
              <div className="p-2 border-l border-gray-400">
                <IoPersonCircleOutline className="text-7xl " />
              </div>
              <div className="flex flex-col items-end">
                <h3> علیرضا مرادی </h3>
                <p className="flex items-center justify-center gap-3 ">
                  <TbPasswordFingerprint className="text-3xl" />
                  40111114994
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-5  p-3  text-slate-200 ">
              <Link to='profile' className="hover:text-gray-400"> پروفایل من </Link>
              <Link to='transaction' className="hover:text-gray-400"> تراکنش های من </Link>
              <Link to='payment' className="hover:text-gray-400"> پرداخت های اینترنتی من </Link>
              <Link to='message' className="hover:text-gray-400"> پیام های من </Link>
              <Link to='changePass' className="text-wrap hover:text-gray-400">
                {" "}
                تغییر کلمه عبور ، شماره موبایل یا ایمیل{" "}
              </Link>
              <Link to='food' href="#" className="hover:text-gray-400"> خرید هفتگی غذا </Link>
              <a href="#" className="hover:text-gray-400"> دریافت کد فراموشی </a>
              <a href="#" className="hover:text-gray-400"> خرید روز فروش </a>
              <a href="#" className="hover:text-gray-400"> افزایش اعتبار اینترنتی </a>
              <a href="#" className="hover:text-gray-400"> پاسخ به نظرسنجی </a>
            </div>
          </div>
          <div className="">
            <Outlet />
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
