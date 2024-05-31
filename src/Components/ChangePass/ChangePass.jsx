import React from "react";

function ChangePass() {
  return (
    <>
      <div className="flex gap-10 p-10 bg-gray-700 rounded-lg h-[556px] overflow-y-scroll w-[900px]">
        <div>
          <div className="text-gray-200">
            <p className="mb-3 p-2 border-b border-gray-400 font-danaBold">
              {" "}
              تغییر رمز و تلفن همراه{" "}
            </p>
            <div className="flex items-center justify-center gap-14 mt-10">
              <div className="flex gap-3">
                <label> تلفن همراه </label>
                <input
                  type="text"
                  className="outline-none rounded-md p-1 text-gray-700"
                />
              </div>
              <div className="flex gap-3">
                <label> ایمیل</label>
                <input
                  type="email"
                  className="outline-none rounded-md p-1 text-gray-700"
                />
              </div>
              <input
                type="submit"
                value="تایید"
                className="rounded-lg bg-yellow-400 p-2 hover:bg-gray-700 hover:text-yellow-400 cursor-pointer transition-all"
              />
            </div>
          </div>
          <div className="text-gray-200 mt-10">
            <p className="mb-3 p-2  font-danaMedium text-sm">
              .لطفا جهت فعالسازی بازیابی رمز عبور ابتدا شماره تلفن همراه و ایمیل
              خود را تائید سپس نسبت به تغییر رمز عبور اقدام نمایید. رمز جدید
              بایستی ترکیبی از حروف کوچک و بزرگ انگلیسی ، دارای کاراکتر های خاص
              (@%$!) و عدد به طول حداقل 8 و حداکثر 20 کاراکتر باشد
            </p>
            <div className="flex items-center justify-center gap-14 mt-10">
              <div className="flex gap-3 ">
                <label> رمز جدید</label>
                <input
                  type="password"
                  className="outline-none rounded-md p-1 text-gray-700"
                />
              </div>
              <div className="flex gap-3 ">
                <label> تکرار رمز جدید</label>
                <input
                  type="password"
                  className="outline-none rounded-md p-1 text-gray-700"
                />
              </div>
              <input
                type="submit"
                value="تایید"
                className="rounded-lg bg-yellow-400 p-2 hover:bg-gray-700 hover:text-yellow-400 cursor-pointer transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePass;
