"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
//COMPONENTS
import Drawer from "./Drawer";
import Detail from "./Detail";

function NewFlycard({ segment, flight, option }) {
  const [openDetail, setOpenDetail] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [formattedDepartureTime, setFormattedDepartureTime] = useState("");
  const [formattedArrivalTime, setFormattedArrivalTime] = useState("");

  const handleDetail = () => {
    setOpenDetail(!openDetail);
  };

  const handleDrawer = () => {
    setOpenDrawer((openDrawer) => !openDrawer);
  };

  const duration = segment.journeyDuration;

  function convertDurationToFarsi(duration) {
    const [hours, minutes] = duration.split(":").map(Number);

    const hoursText = hours > 0 ? `${hours} ساعت` : "";
    const minutesText = minutes > 0 ? `${minutes} دقیقه` : "";

    return [hoursText, minutesText].filter(Boolean).join(" و ");
  }
  const durationInFarsi = convertDurationToFarsi(duration);

  useEffect(() => {
    const departureTime = new Date(segment.departureDateTime);
    const arrivalTime = new Date(segment.arrivalDateTime);

    setFormattedDepartureTime(
      departureTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    );
    setFormattedArrivalTime(
      arrivalTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    );
  }, [segment]);

  const totalFare =
    flight.airItineraryPricingInfo.itinTotalFare.grandTotalWithoutDiscount;

  const isCharter = flight.isCharter;
  const economy = segment.cabinClassCode === "Y";

  const formattedFare = totalFare.toLocaleString();
  return (
    <main
      className="border-2 my-2 lg:w-[894px] w-full max-w-[894px] h-auto"
      dir="rtl"
    >
      <section className="flex flex-col">
        <div className="lg:flex justify-between">
          <div className="flex items-center py-2 px-2" dir="rtl">
            <Image
              src={"/assets/icon.webp"}
              alt="fly-name"
              width={40}
              height={40}
            />
            <p className="text-[14px] text-[#464646] px-2">ماهان</p>
          </div>

          <div className="md:flex md:flex-col md:justify-center">
            <div className="flex flex-row items-center justify-around gap-2 py-2 px-2 md:px-4">
              <div className="flex flex-col items-center">
                <h1 className="text-[#464646] font-bold text-[24px]" dir="rtl">
                  {formattedDepartureTime}
                </h1>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-[#6f6f6f] text-[12px] dir-rtl">
                  {durationInFarsi}
                </p>
                <div className="flex flex-row items-center">
                  <div className="w-3 h-3 border border-[#ff7913] rounded-full"></div>
                  <div className="w-[86px] md:w-[147px] h-[1px] bg-[#c6c6c6]"></div>
                  <div className="w-3 h-3 border border-[#1773dc] rounded-full"></div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <h1 className="text-[#464646] font-bold text-[24px]" dir="rtl">
                  {formattedArrivalTime}
                </h1>
              </div>
            </div>

            <div className="md:flex md:items-center md:justify-between md:px-4 hidden">
              <p className="text-[#8d8d8d] text-[14px]">
                تهران<span className="text-[#8d8d8d] text-[14px]">(THR)</span>
              </p>
              <p className="text-[#8d8d8d]  text-[14px]">
                استانبول
                <span className="text-[#8d8d8d] text-[14px]">(IST)</span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between px-4 md:hidden">
            <p className="text-[#8d8d8d] text-[14px]">
              تهران<span className="text-[#8d8d8d] text-[14px]">(THR)</span>
            </p>
            <p className="text-[#8d8d8d]  text-[14px]">
              استانبول
              <span className="text-[#8d8d8d] text-[14px]">(IST)</span>
            </p>
          </div>

          <div className="flex flex-col-reverse lg:flex-col md:border-r">
            <div className="flex px-2">
              <div className="lg:w-[1px] lg:h-[120px] lg:bg-[#eeeeee] lg:mx-4 hidden"></div>
              <div className="lg:flex lg:flex-col items-center justify-between w-full flex flex-row md:mt-2">
                <div>
                  <p className="text-[12px] text-[#8d8d8d] flex flex-row justify-center pb-1">
                    یک نفر
                  </p>
                  <div className="flex flex-row items-center pb-1">
                    <p className="text-[#1773dc] font-bold text-[20px]">
                      {formattedFare}
                    </p>
                    <p className="text-[#8d8d8d] text-[13px] px-1">تومان</p>
                  </div>
                </div>
                <button
                  onClick={handleDrawer}
                  className="bg-[#1773dc] text-[#fff] py-[9px] px-[29px] rounded-md mb-2"
                >
                  انتخاب بلیت
                </button>
              </div>
            </div>

            <div className="md:py-2 py-4">
              <hr className="md:hidden" />
              <div className="lg:hidden flex justify-between items-center">
                <div className="flex flex-row justify-around items-center gap-1 py-1">
                  <p className="text-xs text-[#464646] border-2 border-[#f4f4f4] py-1 px-3">
                    {isCharter ? "چارتر" : "سیستمی"}
                  </p>
                  <p className="text-xs text-[#464646] py-1 px-1">
                    {economy ? "اکونومی" : "بیزینس"}
                  </p>
                  <p className="text-xs text-[#464646] py-1 px-1">
                    {segment.seatsRemaining} صندلی خالی
                  </p>
                  <p className="text-xs text-[#464646] py-1 px-1">
                    شماره پرواز : {segment.flightNumber}
                  </p>
                  <p className="lg:text-xs lg:text-[#464646] lg:py-1 lg:px-3 hidden">
                    تامین‌کننده: پرایس لاین
                  </p>
                </div>
                <div
                  className="lg:flex lg:gap-4 hidden cursor-pointer"
                  onClick={handleDetail}
                >
                  {openDetail ? (
                    <ArrowUp2 size="18" color="#ff7913" />
                  ) : (
                    <ArrowDown2 size="18" color="#ff7913" />
                  )}
                  <p className="text-[#ff7913] text-[12px]">جزییات بیشتر</p>
                </div>
              </div>
              <hr className="md:hidden" />
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <div className="flex justify-between items-center px-5 border-t-2">
            <div className="flex flex-row gap-1 py-3">
              <p className="text-xs text-[#464646] border-2 border-[#f4f4f4] py-1 px-1">
                {isCharter ? "چارتر" : "سیستمی"}
              </p>
              <p className="text-xs text-[#464646] py-1 px-1">
                {economy ? "اکونومی" : "بیزینس"}
              </p>
              <p className="text-xs text-[#464646] py-1 px-1">
                {segment.seatsRemaining} صندلی خالی
              </p>
              <p className="text-xs text-[#464646] py-1 px-1">
                شماره پرواز : {segment.flightNumber}
              </p>
              <p className="lg:text-xs lg:text-[#464646] lg:py-1 lg:px-3 hidden">
                تامین‌کننده: پرایس لاین
              </p>
            </div>
            <div
              className="lg:flex lg:gap-4 hidden cursor-pointer"
              onClick={handleDetail}
            >
              <p className="text-[#ff7913] text-[12px]">جزییات بیشتر</p>
              {openDetail ? (
                <ArrowUp2 size="18" color="#ff7913" />
              ) : (
                <ArrowDown2 size="18" color="#ff7913" />
              )}
            </div>
          </div>
          {openDetail ? (
            <Detail
              segment={segment}
              flight={flight}
              option={option}
              durationInFarsi={durationInFarsi}
              formattedArrivalTime={formattedArrivalTime}
              formattedDepartureTime={formattedDepartureTime}
            />
          ) : null}
        </div>
        <Drawer isOpen={openDrawer} toggleDrawer={handleDrawer}>
          <Detail
            segment={segment}
            flight={flight}
            option={option}
            durationInFarsi={durationInFarsi}
            formattedArrivalTime={formattedArrivalTime}
            formattedDepartureTime={formattedDepartureTime}
          />
        </Drawer>
      </section>
    </main>
  );
}

export default NewFlycard;
