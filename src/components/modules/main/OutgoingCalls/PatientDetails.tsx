import { userInfo } from "@/utils/UserInfo";
import { Button } from "@/components/ui/button";

import InfoItem from "./InfoItem";

const PatientDetails: React.FC = () => (
  <div className="bg-white shadow-lg rounded-lg p-4 w-full">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700 text-sm">
      {userInfo.slice(0, 3).map((item, index) => (
        <InfoItem key={index} {...item} />
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700 text-sm mt-4">
      {userInfo.slice(3).map((item, index) => (
        <InfoItem key={index} {...item} />
      ))}
      <div className="flex items-center justify-start md:justify-end">
        <Button
          variant="link"
          className="text-blue-600 hover:text-blue-700 transition"
        >
          مشاهده بیشتر و ویرایش
        </Button>
      </div>
    </div>
  </div>
);

export default PatientDetails;
