import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CallDetails = () => (
  <div className="bg-white shadow-md rounded-lg p-4 w-full">
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
    <label className="text-gray-700 text-sm mt-4">یادداشت:</label>
    <Textarea className="mt-2" placeholder="یادداشت را اینجا وارد کنید." />
    <Button className="w-full mt-4 bg-gray-600 text-white hover:bg-gray-700">
      ذخیره اطلاعات
    </Button>
  </div>
);

export default CallDetails;
