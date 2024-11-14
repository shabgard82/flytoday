"use client";

import Image from "next/image";
import { useState } from "react";
import UseWindowSize from "./useWindowSize";
//COMPONENTS
import Detail from "./Detail";
import Drawer from "./Drawer";

export default function FlyCard({ segment, flight, option }) {
  const { width } = UseWindowSize();
  const [openDetail, setOpenDetail] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDetail = () => {
    setOpenDetail((openDetail) => !openDetail);
  };

  const handleDrawer = () => {
    setOpenDrawer((openDrawer) => !openDrawer);
  };

  const departureTime = new Date(segment.departureDateTime);
  const arrivalTime = new Date(segment.arrivalDateTime);
  const duration = segment.journeyDuration;

  const totalFare =
    flight.airItineraryPricingInfo.itinTotalFare.grandTotalWithoutDiscount;

  const formattedFare = totalFare.toLocaleString();

  return (
    <div>
      <div>
        {width <= 768 ? (
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
                <h1 className="text-[#464646] font-bold text-[24px]">
                  {arrivalTime.toLocaleTimeString()}
                </h1>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-[#6f6f6f] text-[12px] dir-rtl pb-2">
                  {duration}
                </p>
                <div className="flex flex-row items-center">
                  <div className="w-3 h-3 border border-[#ff7913] rounded-full"></div>
                  <div className="w-[86px] h-[1px] bg-[#c6c6c6]"></div>
                  <div className="w-3 h-3 border border-[#1773dc] rounded-full"></div>
                </div>
              </div>

              <div>
                <h1 className="text-[#464646] font-bold text-[24px]">
                  {departureTime.toLocaleTimeString()}
                </h1>
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
              <p className="text-xs text-[#464646] py-1 px-3">
                {segment.flightNumber} : شماره پرواز
              </p>
              <p className="text-xs text-[#464646] py-1 px-3">
                {segment.seatsRemaining} صندلی خالی
              </p>
              <p className="text-xs text-[#464646] py-1 px-3">اکونومی</p>
              <p className="text-xs text-[#464646] border-2 border-[#f4f4f4] py-1 px-3">
                چارتر
              </p>
            </div>
            <hr />

            <div className="flex flex-row items-center justify-around pt-2">
              <button
                onClick={handleDrawer}
                className="bg-[#1773dc] text-[#fff] py-[9px] px-[29px] rounded-md"
              >
                جزییات و انتخاب
              </button>
              <div>
                <p className="text-[12px] text-[#8d8d8d] flex flex-row justify-end">
                  یک نفر
                </p>
                <div className="flex flex-row items-center">
                  <p className="text-[#8d8d8d] text-[13px] px-1">تومان</p>
                  <p className="text-[#1773dc] font-bold text-[20px]">
                    {formattedFare}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="border-2 my-10 mx-10 max-w-[894px]">
            <div className="flex flex-row w-full justify-between">
              <div className=" flex flex-row px-2">
                <div className="flex flex-col items-center justify-around pt-2">
                  <div>
                    <p className="text-[12px] text-[#8d8d8d] flex flex-row justify-center pb-1">
                      یک نفر
                    </p>
                    <div className="flex flex-row items-center pb-1">
                      <p className="text-[#8d8d8d] text-[13px] px-1">تومان</p>
                      <p className="text-[#1773dc] font-bold text-[20px]">
                        {formattedFare}
                      </p>
                    </div>
                  </div>
                  <button className="bg-[#1773dc] text-[#fff] py-[9px] px-[29px] rounded-md mb-2">
                    انتخاب بلیت
                  </button>
                </div>
                <div className="w-[1px] h-[120px] bg-[#eeeeee] mx-4"></div>
              </div>

              <div className="flex flex-row items-center justify-around gap-10">
                <div>
                  <h1 className="text-[#464646] font-bold text-[24px]">
                    {arrivalTime.toLocaleTimeString()}
                  </h1>
                </div>

                <div className="flex flex-col items-center">
                  <p className="text-[#6f6f6f] text-[12px] dir-rtl pb-2">
                    {duration}
                  </p>
                  <div className="flex flex-row items-center">
                    <div className="w-3 h-3 border border-[#ff7913] rounded-full"></div>
                    <div className="w-[86px] h-[1px] bg-[#c6c6c6]"></div>
                    <div className="w-3 h-3 border border-[#1773dc] rounded-full"></div>
                  </div>
                </div>

                <div>
                  <h1 className="text-[#464646] font-bold text-[24px]">
                    {departureTime.toLocaleTimeString()}
                  </h1>
                </div>
              </div>

              <div className="flex flex-row justify-end items-center py-2 px-4">
                <p className="text-[14px] text-[#464646] px-2">ماهان</p>
                <Image
                  src={"/assets/icon.webp"}
                  alt="fly-name"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <hr />
            <div className="flex flex-row justify-between items-center px-5">
              <div
                className="flex flex-row gap-4 cursor-pointer"
                onClick={handleDetail}
              >
                <Image
                  src={"/assets/polygon-3.webp"}
                  alt="icon"
                  width={20}
                  height={4}
                />
                <p className="text-[#ff7913] text-[12px]">جزییات بیشتر</p>
              </div>

              <div className="flex flex-row gap-1 py-3">
                <p className="text-xs text-[#464646] py-1 px-3">
                  تامین‌کننده: پرایس لاین
                </p>
                <p className="text-xs text-[#464646] py-1 px-3">
                  {segment.flightNumber} : شماره پرواز
                </p>
                <p className="text-xs text-[#464646] py-1 px-3">
                  {segment.seatsRemaining} صندلی خالی
                </p>
                <p className="text-xs text-[#464646] py-1 px-3">اکونومی</p>
                <p className="text-xs text-[#464646] border-2 border-[#f4f4f4] py-1 px-3">
                  چارتر
                </p>
              </div>
            </div>
            {openDetail ? (
              <Detail segment={segment} flight={flight} option={option} />
            ) : null}
          </div>
        )}
        <Drawer isOpen={openDrawer} toggleDrawer={handleDrawer}>
          <Detail segment={segment} flight={flight} option={option} />
        </Drawer>
      </div>
    </div>
  );
}
