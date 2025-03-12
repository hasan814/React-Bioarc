import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const InsuranceDetails: React.FC = () => (
  <div className="bg-white shadow-lg rounded-lg p-4 w-full">
    <div className="flex flex-wrap md:flex-nowrap items-center justify-between text-gray-700 text-sm">
      <div className="flex items-center space-x-2">
        <span className="font-semibold text-gray-900">بیمه اجتماعی:</span>
      </div>

      <div className="flex items-center space-x-3 rounded-md px-2 py-1">
        <span className="font-semibold text-gray-900">اعتبار بیمه:</span>
        <span className="text-gray-700">۱۴۰۴/۰۹/۱۲</span>
        <Button
          variant="outline"
          className="text-blue-600 bg-blue-100 hover:bg-blue-200 px-3 py-1"
        >
          استحقاق
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <span className="font-semibold text-gray-900">بیمه تکمیلی:</span>
        <Link to="#" className="text-blue-600 hover:underline">
          دانا
        </Link>
        <button className="text-gray-500 hover:text-gray-700">✎</button>
      </div>
    </div>
  </div>
);

export default InsuranceDetails;
