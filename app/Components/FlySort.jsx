export default function FlySort({ sortCriteria, handleSortChange }) {
  return (
    <div className="max-w-[894px]">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <select
            value={sortCriteria}
            onChange={handleSortChange}
            className="bg-white border py-2 px-6"
          >
            <option className="pr-8" value="قیمت">
              قیمت
            </option>
            <option value="زمان">زمان پرواز</option>
          </select>
          <p className="text-[#8d8d8d] text-[14px] px-2">مرتب سازی :</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[#464646] font-bold text-[20px] pb-1">
            بلیط هواپیمای تهران به استانبول
          </p>
          <p className="text-[#464646] text-[14px]">
            ۲۷ پرواز یافت شد . سه‌شنبه، ۱۲ اردیبهشت ۱۴۰۰
          </p>
        </div>
      </div>
    </div>
  );
}
