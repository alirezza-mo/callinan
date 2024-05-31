import React from "react";

import Table from "react-bootstrap/Table";

function Transaction() {
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
              <Table variant="dark" className="bg-gray-700 text-gray-200">
                <thead>
                  <tr className="bg-gray-600 ">
                    <th className="p-2"> جزئیات </th>
                    <th> ردیف </th>
                    <th> عنوان تراکنش </th>
                    <th> تاریخ </th>
                    <th> زمان </th>
                    <th> مبلغ تراکنش </th>
                    <th> اعتبار باقیمانده </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2"> + </td>
                    <td> 1 </td>
                    <td> خرید یا لغو هفتگی شام </td>
                    <td> 1403/03/02 </td>
                    <td>@14:47:00</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transaction;
