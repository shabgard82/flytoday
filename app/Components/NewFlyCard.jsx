import Image from "next/image";
import React from "react";

function NewFlycard() {
  return (
    <main className="border max-w-[1200px] m-auto w-full" dir="rtl">
      <section className="flex flex-col">
        <div className="lg:flex justify-between">
          <div className="flex items-center" dir="rtl">
            <Image
              src={"/assets/icon.webp"}
              alt="fly-name"
              width={40}
              height={40}
            />
            <p className="">ماهان</p>
          </div>

          <div className="flex flex-row items-center justify-around gap-10">
            <div>
              <h1 className="text-[#464646] font-bold text-[24px]">۱۷:۳۰</h1>
              <p className="text-[#8d8d8d]">
                استانبول <span className="text-[#8d8d8d]">(IST)</span>
              </p>
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
              <p className="text-[#8d8d8d]">
                تهران<span className="text-[#8d8d8d]">(THR)</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-col">
            <div className="flex px-2">
              <div className="lg:w-[1px] lg:h-[120px] lg:bg-[#eeeeee] lg:mx-4 hidden"></div>
              <div className="lg:flex lg:flex-col items-center justify-between pt-2 w-full flex flex-row">
                <div>
                  <p className="text-[12px] text-[#8d8d8d] flex flex-row justify-center pb-1">
                    یک نفر
                  </p>
                  <div className="flex flex-row items-center pb-1">
                    <p className="text-[#8d8d8d] text-[13px] px-1">تومان</p>
                    <p className="text-[#1773dc] font-bold text-[20px]">
                      ۱,۳۷۰,۰۰۰
                    </p>
                  </div>
                </div>
                <button className="bg-[#1773dc] text-[#fff] py-[9px] px-[29px] rounded-md mb-2">
                  انتخاب بلیت
                </button>
              </div>
            </div>

            <div>
              <hr />
              <div className="lg:hidden flex justify-between items-center px-5 ">
                <div className="flex flex-row justify-between gap-1 py-3">
                  <p className="text-xs text-[#464646] border-2 border-[#f4f4f4] py-1 px-3">
                    چارتر
                  </p>
                  <p className="text-xs text-[#464646] py-1 px-3">اکونومی</p>
                  <p className="text-xs text-[#464646] py-1 px-3">
                    ۷ صندلی خالی
                  </p>
                  <p className="text-xs text-[#464646] py-1 px-3">
                    شماره پرواز : ۷۸۵۶
                  </p>
                  <p className="lg:text-xs lg:text-[#464646] lg:py-1 lg:px-3 hidden">
                    تامین‌کننده: پرایس لاین
                  </p>
                </div>
                <div className="lg:flex lg:gap-4 hidden">
                  <Image
                    src={"/assets/polygon-3.webp"}
                    alt="icon"
                    width={20}
                    height={5}
                  />
                  <p className="text-[#ff7913] text-[12px]">جزییات بیشتر</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <div className="flex justify-between items-center px-5 border-t-2">
            <div className="flex flex-row gap-1 py-3">
              <p className="lg:text-xs lg:text-[#464646] lg:py-1 lg:px-3 hidden">
                تامین‌کننده: پرایس لاین
              </p>
              <p className="text-xs text-[#464646] py-1 px-3">
                شماره پرواز : ۷۸۵۶
              </p>
              <p className="text-xs text-[#464646] py-1 px-3">۷ صندلی خالی</p>
              <p className="text-xs text-[#464646] py-1 px-3">اکونومی</p>
              <p className="text-xs text-[#464646] border-2 border-[#f4f4f4] py-1 px-3">
                چارتر
              </p>
            </div>
            <div className="lg:flex lg:gap-4 hidden">
              <Image
                src={"/assets/polygon-3.webp"}
                alt="icon"
                width={20}
                height={5}
              />
              <p className="text-[#ff7913] text-[12px]">جزییات بیشتر</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NewFlycard;
