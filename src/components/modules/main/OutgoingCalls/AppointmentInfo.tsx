import { formatPersianDate } from "@/utils/HelperFunction";
import { Edit, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const AppointmentInfo = () => {
  // ============== State ==============
  const appointmentDate = formatPersianDate("2024-09-13T14:00:00"); // معادل ۱۴۰۳/۰۶/۲۳ - ۱۴:۰۰

  // ============== Rendering ==============
  return (
    <div className="flex flex-col md:flex-row items-center gap-3">
      <div className="flex flex-col md:flex-row md:items-center justify-between w-full bg-gray-100 p-3 rounded-md md:h-14">
        <span className="text-gray-500 font-semibold">اطلاعات نوبت</span>
        <span className="text-gray-700">نام پزشک: هدی نعمت</span>
        <span className="text-gray-700">تاریخ نوبت: {appointmentDate}</span>
        <button className="flex items-center text-blue-600 hover:text-blue-700 transition">
          <Edit className="h-4 w-4 ml-1" />
          ویرایش نوبت
        </button>
      </div>
      <Button className="bg-blue-600 text-white flex items-center gap-2 h-14 px-4 rounded-md hover:bg-blue-700 transition w-full md:w-auto">
        <Plus className="h-5 w-5" />
        <span className="text-lg font-medium">نوبت جدید</span>
      </Button>
    </div>
  );
};

export default AppointmentInfo;
