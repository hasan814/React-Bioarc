import { useState, useEffect } from "react";
import { formattedDate } from "@/utils/Date";
import { Tag } from "lucide-react";

const DateInfo = () => {
  // =============== States ==============
  const [currentDate, setCurrentDate] = useState<string>("");

  // =============== Effect ==============
  useEffect(() => {
    setCurrentDate(formattedDate);
  }, []);

  // =============== Rendering ==============
  return (
    <div className="flex flex-wrap md:flex-nowrap w-full md:w-4/5 items-center border border-gray-300 p-4 bg-white">
      <div className="flex flex-col items-center pr-4 w-full md:w-auto mb-3 md:mb-0 border-b md:border-b-0 pb-3 md:pb-0">
        <span className="text-blue-600 font-semibold text-lg md:ml-auto">
          پروفایل
        </span>
        <span className="text-gray-500 text-sm mt-1">{currentDate}</span>
      </div>

      <div className="flex flex-wrap md:flex-nowrap mr-auto items-center space-x-2 w-full md:w-auto justify-center">
        <div className="flex flex-col items-center space-y-2 w-full md:w-auto">
          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-md">
            <span>به بیمار نوبت درمانگاه قرنیه داده نشود</span>
          </span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md w-fit">
            <span>پرخاشگر</span>
          </span>
        </div>

        <span className="bg-blue-100 text-blue-700 px-3 py-3 rounded-md flex items-center space-x-2 justify-center">
          <Tag className="h-4 w-4 text-blue-700" />
          <span>برچسب</span>
        </span>
      </div>
    </div>
  );
};

export default DateInfo;
