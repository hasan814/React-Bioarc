import { MicOff, Pause, PhoneOff, Share } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallInfo = () => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-2/5 relative">
    <div className="absolute top-0 left-0 w-full h-1/4 bg-gray-100 rounded-t-lg"></div>

    <div className="relative flex flex-col items-center pt-12">
      <span className="text-blue-500 text-sm absolute top-2 right-3">
        بیمار تلفنی
      </span>

      <img
        src="/01.jpg"
        alt="User"
        className="w-36 h-36 rounded-full border-4 border-white relative z-10"
      />

      <h2 className="text-lg font-semibold mt-3 relative z-10">مهدی غفاری</h2>
      <span className="text-xl font-bold text-gray-800 relative z-10">
        ۰۵:۳۲
      </span>
      <span className="text-gray-500 text-sm block relative z-10">
        در حال صحبت...
      </span>
    </div>

    <div className="p-6 text-center">
      <div className="grid grid-cols-3 gap-2 mt-8 w-[80%] mx-auto">
        {[Pause, Share, MicOff].map((Icon, index) => (
          <Button
            key={index}
            className="flex flex-col py-8 items-center"
            variant="outline"
          >
            <Icon className="text-gray-600" />
            <span className="text-sm text-gray-600">بی صدا</span>
          </Button>
        ))}
      </div>

      <Button className="bg-red-600 text-white flex items-center justify-center w-[80%] mt-6 py-8 hover:bg-red-700 transition mx-auto">
        <PhoneOff className="h-5 w-5 ml-2" />
        <span>قطع تماس</span>
      </Button>
    </div>
  </div>
);

export default CallInfo;
