import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FiMic } from "react-icons/fi";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AdditionalActions = () => (
  <div className="bg-white flex flex-col shadow-lg rounded-lg p-6 w-full">
    <Button
      variant="outline"
      className="w-fit text-blue-600 bg-blue-100 hover:bg-blue-200 mr-auto"
    >
      نوبت برای شخصی دیگر
    </Button>

    <div className="mt-4">
      <label className="text-gray-700 text-sm">نحوه تماس:</label>
      <Select>
        <SelectTrigger className="w-full mt-2">
          <SelectValue placeholder="لطفا یک مورد را انتخاب کنید" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="phone">تماس تلفنی</SelectItem>
          <SelectItem value="video">تماس تصویری</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div className="mt-4 relative">
      <label className="text-gray-700 text-sm">یادداشت:</label>
      <Textarea className="mt-2" placeholder="یادداشت را اینجا وارد کنید." />
      <FiMic className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg cursor-pointer hover:text-gray-700" />
    </div>

    <Button className="w-fit mt-4 py-3 px-7 bg-gray-200 text-gray-600 hover:bg-gray-200 mr-auto">
      ذخیره اطلاعات
    </Button>
  </div>
);

export default AdditionalActions;
