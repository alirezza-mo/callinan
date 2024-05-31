import React, { useState } from "react";

import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const[submit , setSubmit] = useState(false)
  return (
    <>
      <main className="bg-bgLogin bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center  h-[100vh] w-full">
        <Header />
        <section className="backdrop-blur-md bg-white/30 p-10 rounded-lg flex gap-20">
          <form
            action=""
            className="flex flex-col gap-4 items-center justify-center"
          >
            <div className="flex flex-col gap-4 items-center justify-between">
              <label htmlFor="" className="text-lg font-danaMedium">
                {" "}
                نام کاربری{" "}
              </label>
              <input
                type="text"
                className="font-danaMedium outline-none w-72 p-1 rounded-md text-right"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />
            </div>
            <div className="flex flex-col gap-4 items-center justify-between">
              <label htmlFor="" className="text-lg font-danaMedium">
                {" "}
                رمز عبور
              </label>
              <input
                type="text"
                className="font-danaMedium outline-none w-72 p-1 rounded-md text-right"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <Link
              type="submit"
              className="rounded-lg py-2 px-3 text-lg bg-yellow-400 flex items-center justify-center font-danaBold cursor-pointer hover:bg-black hover:text-yellow-400 transition-all"
              onClick={ e => {
                e.preventDefault()
                console.log(submit);
              }}
              
            > تایید </Link>
          </form>
          <div className="w-96">
            <h2 className="font-bold text-xl mb-3"> اطلاعیه : </h2>
            <p className="text-gray-800">
              1403/02/27-بنام خدا دهه ی کرامت میلاد بانوی عظیم الشأن حضرت
              معصومه(س) و میلاد باسعادت حضرت ثامن الحجج علی بن موسی الرضا(ع) را
              گرامی می داریم. هفته ی سراهای دانشجویی که گویای یادگیری مهارت ها
              وتکنیک های زیست جمعی است را همراه با الگو قرار دادن شاخصه های
              تقوای درون ورعایت قوانین ومقررات است را گرامی می داریم.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
