import React from "react";

import { IoPersonCircleOutline } from "react-icons/io5";

function Profile() {
  return (
    <>
      <div className="flex gap-10 p-10 bg-gray-700 rounded-lg h-[556px] overflow-y-scroll w-[900px]">
        <div className="flex flex-col items-center justify-center text-gray-200 border-l border-gray-400 p-5">
          <IoPersonCircleOutline className="text-7xl " />
          <h2> علیرضا مرادی </h2>
          <h3> 40111114994 </h3>
        </div>
        <div>
          <div className="text-gray-200">
            <p className="mb-3 p-2 border-b border-gray-400 font-danaBold"> مشخصات فردی </p>
            <div className="flex items-center justify-center gap-14 mt-10">
              <div className="flex flex-col gap-3">
                <p> شماره شناسایی: 40111114994 </p>
                <p> گروه: دانشجویان خوابگاهی </p>
                <p> جنسیت: مرد </p>
                <p> دانشکده: تعریف نشده </p>
                <p> خوابگاه: ... </p>
                <p> اتاق: ... </p>
                <p> مقطع تحصیلی: تعریف نشده </p>
                <p> کارت یا حساب بانکی: ... </p>
              </div>
              <div className="flex flex-col gap-3">
                <p> کد ملی: 4660606929 </p>
                <p> زیرگروه: دانشجویان خوابگاهی </p>
                <p> توضیحات: ... </p>
                <p> رشته: تعریف نشده </p>
                <p> بلوک: ... </p>
                <p> تلفن همراه: 0911111 </p>
                <p> ایمیل: test1@gmail.com </p>
                <p> آخرین ورود: 16:53:00 - 1403/03/03 </p>
              </div>
            </div>
          </div>
          <div className="text-gray-200 mt-5">
          <p className="mb-3 p-2 border-b border-gray-400 font-danaBold"> مشخصات کارت و اعتبار </p>
            <div className="flex items-center justify-center gap-14 mt-10">
              <div className="flex flex-col gap-3">
                <p> شماره کارت: 	302551 </p>
                <p> تاریخ تحویل: 	1401/07/08 </p>
                <p> وضعیت کارت: 	فعال </p>
              </div>
              <div className="flex flex-col gap-3">
                <p> شماره بارکد: 	302551</p>
                <p> تاریخ اعتبار: 	1405/06/31 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
