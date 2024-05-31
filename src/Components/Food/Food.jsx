import React, { useState } from "react";

import { CiCalendarDate } from "react-icons/ci";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FiSquare } from "react-icons/fi";
import { FaRegCheckSquare } from "react-icons/fa";

let data = {
  dinner: [
    {
      time: "شنبه",
      food: "استانبولی پلو با ماست و نان",
      Predecessor: "سلف مرکزی",
      count: 1,
      price: 0.0,
      selected: false,
    },
    {
      time: "یکشنبه",
      food: "استانبولی پلو با ماست و نان",
      Predecessor: "سلف مرکزی",
      count: 1,
      price: 0.0,
      selected: false,
    },
    {
      time: "دوشنبه",
      food: "استانبولی پلو با ماست و نان",
      Predecessor: "سلف مرکزی",
      count: 1,
      price: 0.0,
      selected: false,
    },
    {
      time: "سه شنبه",
      food: "استانبولی پلو با ماست و نان",
      Predecessor: "سلف مرکزی",
      count: 1,
      price: 0.0,
      selected: false,
    },
    {
      time: "چهارشنبه",
      food: "استانبولی پلو با ماست و نان",
      Predecessor: "سلف مرکزی",
      count: 1,
      price: 0.0,
      selected: false,
    },
    {
      time: "پنجشنبه",
      food: "استانبولی پلو با ماست و نان",
      Predecessor: "سلف مرکزی",
      count: 1,
      price: 0.0,
      selected: false,
    },
    {
      time: "جمعه",
      food: "استانبولی پلو با ماست و نان",
      Predecessor: "سلف مرکزی",
      count: 1,
      price: 0.0,
      selected: false,
    },
  ],
  lunch: [
    {
      time: "شنبه",

      food: "چلو جوجه کباب و نان",
      Predecessor: "سلف مرکزی",
      count: 1,
      price: 0.0,
    },
    {
      time: "یکشنبه",

      food: "چلو جوجه کباب و نان",

      Predecessor: "سلف مرکزی",
      count: 1,
      price: 0.0,
    },
    {
      time: "دوشنبه",

      food: "چلو جوجه کباب و نان",

      Predecessor: "سلف مرکزی",
      count: 1,
      price: 0.0,
    },
    {
      time: "سه شنبه",

      food: "چلو جوجه کباب و نان",
      Predecessor: "سلف مرکزی",
      count: 1,
      price: 0.0,
    },
    {
      time: "چهارشنبه",

      food: "چلو جوجه کباب و نان",
      Predecessor: "سلف مرکزی",
      count: 1,
      price: 0.0,
    },
    {
      time: "پنجشنبه",

      food: "چلو جوجه کباب و نان",
      Predecessor: "سلف مرکزی",
      count: 1,
      price: 0.0,
    },
    {
      time: "جمعه",

      food: "چلو جوجه کباب و نان",
      Predecessor: "سلف مرکزی",
      count: 1,
      price: 0.0,
    },
  ],
  breakFast: [
    {
      time: "شنبه",

      food: " پنیر خرما و شیر ",
      Predecessor: "سلف مرکزی",
      count: 1,
      price: 0.0,
    },
    {
      time: "یکشنبه",

      food: " پنیر خرما و شیر  ",

      Predecessor: "سلف مرکزی",
      count: 1,
      price: 0.0,
    },
    {
      time: "دوشنبه",

      food: " پنیر خرما و شیر  ",

      Predecessor: "سلف مرکزی",
      count: 1,
      price: 0.0,
    },
    {
      time: "سه شنبه",

      food: " پنیر خرما و شیر  ",
      Predecessor: "سلف مرکزی",
      count: 1,
      price: 0.0,
    },
    {
      time: "چهارشنبه",

      food: " پنیر خرما و شیر  ",
      Predecessor: "سلف مرکزی",
      count: 1,
      price: 0.0,
    },
    {
      time: "پنجشنبه",

      food: " پنیر خرما و شیر  ",
      Predecessor: "سلف مرکزی",
      count: 1,
      price: 0.0,
    },
    {
      time: "جمعه",

      food: " پنیر خرما و شیر  ",
      Predecessor: "سلف مرکزی",
      count: 1,
      price: 0.0,
    },
  ],
};

function Food() {
  const [meal, setMeal] = useState("dinner");
  const [tick, setTick] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-10 p-10 bg-gray-700 rounded-lg h-[556px] overflow-y-scroll w-[900px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center gap-5 text-gray-200 border border-gray-400 rounded-lg w-72 p-1">
            <h3 className="font-danaBold text-gray-400 text-lg">
              {" "}
              انتخاب تاریخ :
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-center gap-1 ">
                <MdNavigateNext className="text-5xl cursor-pointer text-yellow-400 hover:text-gray-400 transition-all " />
                <CiCalendarDate className="text-5xl cursor-pointer text-yellow-400 hover:text-gray-400 transition-all " />
                <GrFormPrevious className="text-5xl cursor-pointer text-yellow-400 hover:text-gray-400 transition-all " />
              </div>
              <p className="text-xs"> 1403/03/04 الی 1403/03/11 </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-gray-200 border border-gray-400 rounded-lg w-72 p-1">
            <h3 className="font-danaBold text-gray-400 text-lg">
              {" "}
              اعتبار شما:
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-center gap-1 ">
                <p className="text-xs"> 0 ریال</p>
              </div>
              <CiMoneyCheck1 className="text-5xl cursor-pointer text-yellow-400 hover:text-gray-400 transition-all " />
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-2 mb-5">
            <button
              className={`p-1 rounded-md bg-yellow-400 w-20 cursor-pointer ${
                meal === "breakFast" && "bg-black/40 text-yellow-400"
              }`}
              onClick={() => setMeal("breakFast")}
            >
              {" "}
              صبحانه{" "}
            </button>
            <button
              className={`p-1 rounded-md bg-yellow-400 w-20 cursor-pointer ${
                meal === "dinner" && "bg-black/40 text-yellow-400"
              }`}
              onClick={() => setMeal("dinner")}
            >
              {" "}
              ناهار{" "}
            </button>
            <button
              className={`p-1 rounded-md bg-yellow-400 w-20 cursor-pointer ${
                meal === "lunch" && "bg-black/40 text-yellow-400"
              }`}
              onClick={() => setMeal("lunch")}
            >
              {" "}
              شام{" "}
            </button>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th> ردیف </th>
                  <th> روز </th>
                  <th> سلف </th>
                  <th> غذا </th>
                  <th> تعداد </th>
                  <th> کالری </th>
                  <th> مبلغ خرید </th>
                  <th> وضعیت </th>
                </tr>
              </thead>
              <tbody>
                {data[meal].map((dt) => (
                  <tr
                    className={` ${
                      dt.selected ? "bg-green-800" : "bg-slate-700"
                    }`}
                  >
                    <td className="text-gray-100 text-lg">
                      {" "}
                      {dt.selected ? (
                        <FaRegCheckSquare
                          className="cursor-pointer"
                          onClick={() => {
                            dt.selected = false;
                            setTick((prev) => !prev);
                            console.log(dt);
                          }}
                        />
                      ) : (
                        <FiSquare
                          className="cursor-pointer"
                          onClick={() => {
                            dt.selected = true;
                            setTick((prev) => !prev);
                          }}
                        />
                      )}
                      {console.log(dt.selected)}
                    </td>
                    <td className="text-gray-100 text-lg"> {dt.time} </td>
                    <td className="text-gray-100 text-lg">
                      {" "}
                      {dt.Predecessor}{" "}
                    </td>
                    <td className="text-gray-100 text-lg"> {dt.food} </td>
                    <td className="text-gray-100 text-lg"> {dt.count} </td>
                    <td className="text-gray-100 text-lg"> 0 </td>
                    <td className="text-gray-100 text-lg"> {dt.price} </td>
                    <td className="text-gray-100 text-lg"> + </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              type="submit"
              className="p-1 rounded-md bg-yellow-400 w-20  cursor-pointer m-5 "
            >
              {" "}
              {`ذخیره`}{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Food;
