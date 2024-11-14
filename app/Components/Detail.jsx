import Image from "next/image";

export default function Detail({ segment, flight, option }) {
  return (
    <main
      dir="rtl"
      className="flex flex-col justify-between px-2 max-w-[894px]"
    >
      <div className="flex items-center gap-6 border-b py-0">
        <div className="flex items-center bg-blue-600 py-2 px-4 rounded-[4px] gap-2">
          <Image
            src={"/assets/plain.webp"}
            alt="fly-name"
            width={20}
            height={20}
          />
          <p className="text-[14px] text-[#ffffff]">جزئیات پرواز</p>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src={"/assets/info.webp"}
            alt="fly-name"
            width={20}
            height={20}
          />
          <p className="text-[#8d8d8d] text-[14px]">قوانین و شرایط</p>
        </div>
      </div>
      <p className="font-bold text-[16px] text-[#464646] md:pt-4 py-4">
        پرواز رفت تهران-استانبول
      </p>
      <div className="flex flex-col">
        <div className="flex items-center">
          <div className="flex flex-row justify-start items-center py-2 px-4 ">
            <p className="text-[14px] text-[#464646] px-2">ماهان</p>
            <Image
              src={"/assets/icon.webp"}
              alt="fly-name"
              width={40}
              height={40}
            />
          </div>

          <div className="flex flex-col items-center">
            <div className="w-2 h-2 border border-[#870b1d] rounded-full my-2"></div>
            <div className="flex flex-col items-center gap-2 md:h-[112px] h-[307px]">
              {[...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className="w-1 h-1 bg-[#c6c6c6] rounded-full"
                ></div>
              ))}
            </div>
            <div className="w-2 h-2 border border-[#870b1d] rounded-full my-2"></div>
          </div>

          <div className="flex flex-col justify-around px-4">
            <div className="flex md:flex-row flex-col  md:gap-10 mb-4">
              <div className="flex md:gap-4 mb-2 md:mb-0">
                <p className="text-[14px] font-bold">۱۲:۴۵ تهران(THR) </p>
              </div>
              <div className="flex md:gap-4 mb-2 md:mb-0">
                <p className="text-[#464646] text-[14px]">
                  12 اردیبهشت 1399 (07 Apr)
                </p>
              </div>
              <div className="flex md:gap-4">
                <p className="text-[#8d8d8d] text-[14px]">Imam Khomeini Intl</p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col  md:gap-10 md:my-1">
              <div className="flex  gap-4">
                <p className="text-[12px] text-[#8d8d8d]">مدت پرواز</p>
                <p className="text-[12px]">۳ ساعت و ۴۵ دقیقه</p>
              </div>
              <div className="flex gap-4">
                <p className="text-[12px] text-[#8d8d8d] pt-1 md:pt-0">
                  نوع پرواز
                </p>
                <p className="text-[12px]">سیستمی</p>
              </div>
              <div className="flex gap-4">
                <p className="text-[12px] text-[#8d8d8d] pt-1 md:pt-0">
                  استرداد
                </p>
                <p className="text-[12px] text-[#ff1d23]">غیر قابل استرداد</p>
              </div>
            </div>

            <div className="flex md:flex-row flex-col  md:gap-10 md:my-1">
              <div className="flex  gap-4">
                <p className="text-[12px] text-[#8d8d8d] pt-1 md:pt-0">
                  نوع هواپیما
                </p>
                <p className="text-[12px]">Airbus A320</p>
              </div>
              <div className="flex gap-4">
                <p className="text-[12px] text-[#8d8d8d] pt-1 md:pt-0">
                  بار مجاز
                </p>
                <p className="text-[12px]">۲۰ کیلوگرم</p>
              </div>
            </div>

            <div className="flex md:flex-row flex-col  md:gap-10 md:my-1">
              <div className="flex gap-4">
                <p className="text-[12px] text-[#8d8d8d] pt-1 md:pt-0">
                  کلاس پرواز
                </p>
                <p className="text-[12px]">اکونومی</p>
              </div>
              <div className="flex gap-4">
                <p className="text-[12px] text-[#8d8d8d] pt-1 md:pt-0">
                  کلاس نرخی
                </p>
                <p className="text-[12px]">A</p>
              </div>
            </div>

            <div className="flex  md:flex-row flex-col  md:gap-10 mt-4">
              <div className="flex gap-4">
                <p className="text-[14px] font-bold flex md:gap-4 mb-2 md:mb-0">
                  ۱۲:۴۵ استانبول(IST)
                </p>
              </div>
              <div className="text-[#464646] text-[14px] flex md:gap-4 mb-2 md:mb-0">
                <p>12 اردیبهشت 1399 (07 Apr)</p>
              </div>
              <div className="flex gap-4">
                <p className="text-[#8d8d8d] text-[14px]">
                  (Istanbul Airport Intl)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row py-2 border md:border-none">
          <div className="flex flex-row md:border px-10 py-2 justify-between">
            <p className="text-[#464646] text-[14px]">بزرگسال</p>
            <p className="text-[#464646] text-[14px]"> ۱۳۷۰۰۰۰ تومان</p>
          </div>
          <div className="flex flex-row md:border justify-between px-10 py-2">
            <p className="text-[#464646] text-[14px]">کودک</p>
            <p className="text-[#464646] text-[14px]">۱۳۷۰۰۰۰ تومان</p>
          </div>
          <div className="flex flex-row md:border justify-between px-10 py-2">
            <p className="text-[#464646] text-[14px]">نوزاد</p>
            <p className="text-[#464646] text-[14px]">۱۳۷۰۰۰۰ تومان</p>
          </div>
          <div className="flex md:border justify-between px-10 py-2">
            <p className="text-[#464646] font-bold text-[14px]">مجموع:</p>
            <p className="text-[#1773dc] font-bold text-[14px]">
              ۱۳۷۰۰۰۰ تومان
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
