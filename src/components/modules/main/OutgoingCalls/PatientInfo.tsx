import { PhoneOff } from "lucide-react";
import { Button } from "@/components/ui/button";

import CallActions from "./CallActions";

const PatientInfo = () => (
  <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-full md:w-2/5">
    <span className="text-blue-500 text-sm">بیمار تلفنی</span>
    <img
      src="/01.jpg"
      alt="User"
      className="w-20 h-20 rounded-full border-3 border-white mt-2"
    />
    <h2 className="text-lg font-semibold mt-3">مهدی غفاری</h2>
    <span className="text-xl font-bold text-gray-800">۰۵:۳۲</span>
    <span className="text-gray-500 text-sm">در حال صحبت...</span>
    <CallActions />
    <Button className="bg-red-600 text-white w-full mt-6 py-3 hover:bg-red-700 transition">
      <PhoneOff className="h-5 w-5 ml-2" /> قطع تماس
    </Button>
  </div>
);

export default PatientInfo;
