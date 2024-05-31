import React from "react";
import Msg from "../Msg/Msg";

function Message() {
  return (
    <>
      <div className="flex gap-10 p-10 bg-gray-700 rounded-lg h-[556px] overflow-y-scroll w-[900px]">
        <div>
          <div className="text-gray-200">
            <p className="mb-3 p-2 border-b border-gray-400 font-danaBold">
              پیام ها :
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-start gap-32 text-white ">
              <h3 className="border-b border-gray-400 p-2"> عنوان پیام </h3>
              <h3 className="border-b border-gray-400 p-2"> وضعیت </h3>
              <h3 className="border-b border-gray-400 p-2"> تاریخ ارسال </h3>
            </div>
            <Msg/>
            <Msg/>
            <Msg/>
            <Msg/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
