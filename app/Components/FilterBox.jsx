"use client";
import { useState } from "react";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";

export default function FilterBox({ filters, setFilters, handleRemoveFilter }) {
  const [openFilter, setOpenFilter] = useState(true);
  const [openFilterClass, setOpenFilterClass] = useState(true);

  const handleFilter = () => {
    setOpenFilter(!openFilter);
  };

  const handleFilterClass = () => {
    setOpenFilterClass(!openFilterClass);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className="md:w-full md:min-w-[282px] md:border md:justify-start h-auto">
      <div className="flex justify-between items-center px-4 py-4">
        <p
          className="text-[13px] text-[#1773dc] cursor-pointer"
          onClick={handleRemoveFilter}
        >
          حذف فیلترها
        </p>
        <p className="text-[#464646] font-bold text-[14px]">فیلترها</p>
      </div>
      <div className="border-t px-2 py-2">
        <div className="flex items-center justify-between">
          {openFilter ? (
            <ArrowUp2 size="18" color="#8d8d8d" onClick={handleFilter} />
          ) : (
            <ArrowDown2 size="18" color="#8d8d8d" onClick={handleFilter} />
          )}
          <p className="text-[14px] text-[#464646] font-bold" dir="rtl">
            نوع پرواز
          </p>
        </div>
      </div>
      {openFilter ? (
        <div className="fex flex-col items-center py-2">
          <label className="flex items-center pb-2" dir="rtl">
            <input
              type="checkbox"
              name="charter"
              checked={filters.charter}
              onChange={handleCheckboxChange}
              className="mr-2 h-[18px] w-[18px]"
            />
            <span className="px-4 text-[14px] text-[#161616]">
              پرواز های چارتری
            </span>
          </label>
          <label className="flex items-center pb-2" dir="rtl">
            <input
              type="checkbox"
              name="system"
              checked={filters.system}
              onChange={handleCheckboxChange}
              className="mr-2 h-[18px] w-[18px]"
            />
            <span className="px-4 text-[14px] text-[#161616]">
              پرواز های سیستمی
            </span>
          </label>
        </div>
      ) : null}
      <div className="border-t border-b px-2 py-2">
        <div className="flex items-center justify-between">
          {openFilterClass ? (
            <ArrowUp2 size="18" color="#8d8d8d" onClick={handleFilterClass} />
          ) : (
            <ArrowDown2 size="18" color="#8d8d8d" onClick={handleFilterClass} />
          )}
          <p className="text-[14px] text-[#464646] font-bold" dir="rtl">
            کلاس پروازی
          </p>
        </div>
        {openFilterClass ? (
          <div className="fex flex-col items-center py-2">
            <label className="flex items-center pb-2" dir="rtl">
              <input
                type="checkbox"
                name="business"
                checked={filters.business}
                onChange={handleCheckboxChange}
                className="mr-2 h-[18px] w-[18px]"
              />
              <span className="px-4 text-[14px] text-[#161616]">بیزینس</span>
            </label>
            <label className="flex items-center pb-2" dir="rtl">
              <input
                type="checkbox"
                name="economy"
                checked={filters.economy}
                onChange={handleCheckboxChange}
                className="mr-2 h-[18px] w-[18px]"
              />
              <span className="text-[14px] text-[#161616] px-4  ">اکونومی</span>
            </label>
          </div>
        ) : null}
      </div>
    </div>
  );
}
