import React from "react";

import "./Payment.css";

function Payment() {
  return (
    <>
      <div className="flex gap-10 p-10 bg-gray-700 rounded-lg h-[556px] overflow-y-scroll w-[900px]">
        <div>
          <div className="text-gray-200">
            <p className="mb-3 p-2 border-b border-gray-400 font-danaBold">
              {" "}
              تعیین بازه زمانی{" "}
            </p>
            <div className="flex items-center justify-center gap-14 mt-10">
              <div className="flex gap-3">
                <label> از </label>
                <input type="date" />
              </div>
              <div className="flex gap-3">
                <label> تا </label>
                <input type="date" />
              </div>
              <input
                type="submit"
                value="تایید"
                className="rounded-lg bg-yellow-400 p-2 hover:bg-gray-700 hover:text-yellow-400 cursor-pointer transition-all"
              />
            </div>
          </div>
          <div className=" mt-5">
            <div className="flex items-center justify-center gap-14 mt-10">
              <table>
                <tr>
                  <th> ردیف </th>
                  <th> وضعیت پرداخت </th>
                  <th> تاریخ و زمان پرداخت </th>
                  <th> مبلغ </th>
                  <th> شماره فاکتور </th>
                  <th> کد پیگیری </th>
                  <th> بانک </th>
                  <th> پیام سیستم </th>
                  <th> تاریخ و زمان استعلام مجدد </th>
                  <th> استعلام </th>
                </tr>
                <tr >
                  <td >
                    1
                  </td>
                  <td >
                    دانشجو
                  </td>
                  <td >
                    ---
                  </td>
                  <td >
                    ---
                  </td>
                  <td >
                    ---
                  </td>
                  <td >
                    ---
                  </td>
                  <td >
                    ---
                  </td>
                  <td >
                    ---
                  </td>
                  <td >
                    ---
                  </td>
                  <td >
                    ---
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
