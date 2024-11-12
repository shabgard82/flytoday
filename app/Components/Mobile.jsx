import Image from "next/image";
import React from "react";

function Mobile() {
  return (
    <div className="mt-20 w-full h-[270px] flex flex-col border-2">
      <div className="flex flex-row justify-end items-center py-2 px-4">
        <p className="text-[14px] text-[#464646] px-2">ماهان</p>
        <Image
          src={"/assets/icon.webp"}
          alt="fly-name"
          width={40}
          height={40}
        />
      </div>

      <div className="flex flex-row items-center justify-around">
        <div>
          <h1 className="text-[#464646] font-bold text-[24px]">۱۷:۳۰</h1>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-[#6f6f6f] text-[12px] dir-rtl pb-2">
            ۳ ساعت و ۴۵ دقیقه
          </p>
          <div className="flex flex-row items-center">
            <div className="w-3 h-3 border border-[#ff7913] rounded-full"></div>
            <div className="w-[86px] h-[1px] bg-[#c6c6c6]"></div>
            <div className="w-3 h-3 border border-[#1773dc] rounded-full"></div>
          </div>
        </div>

        <div>
          <h1 className="text-[#464646] font-bold text-[24px]">۱۲:۴۵</h1>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center px-5 py-4">
        <p className="text-[#8d8d8d]">
          استانبول <span className="text-[#8d8d8d]">(IST)</span>
        </p>
        <p className="text-[#8d8d8d]">
          تهران<span className="text-[#8d8d8d]">(THR)</span>
        </p>
      </div>

      <hr />
      <div className="flex flex-row justify-around py-3">
        <p className="text-xs text-[#464646] py-1 px-3">شماره پرواز : ۷۸۵۶</p>
        <p className="text-xs text-[#464646] py-1 px-3">۷ صندلی خالی</p>
        <p className="text-xs text-[#464646] py-1 px-3">اکونومی</p>
        <p className="text-xs text-[#464646] border-2 border-[#f4f4f4] py-1 px-3">
          چارتر
        </p>
      </div>
      <hr />

      <div className="flex flex-row items-center justify-around pt-2">
        <button className="bg-[#1773dc] text-[#fff] py-[9px] px-[29px] rounded-md">
          جزییات و انتخاب
        </button>
        <div>
          <p className="text-[12px] text-[#8d8d8d] flex flex-row justify-end">
            یک نفر
          </p>
          <div className="flex flex-row items-center">
            <p className="text-[#8d8d8d] text-[13px] px-1">تومان</p>
            <p className="text-[#1773dc] font-bold text-[20px]">۱,۳۷۰,۰۰۰</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;