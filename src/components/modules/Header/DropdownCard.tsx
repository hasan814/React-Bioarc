import { useState } from "react";
import { Menu } from "lucide-react";

import Dropdown from "./DropDown";

const DropdownCard: React.FC = () => {
  // =============== States ===============
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHospital, setSelectedHospital] =
    useState<string>("بیمارستان شریعتی");
  const [selectedDepartment, setSelectedDepartment] =
    useState<string>("روماتولوژی");
  const [selectedSender, setSelectedSender] = useState<string>("محمود اکبریان");

  // =============== Rendering ===============
  return (
    <div>
      <button
        className="lg:hidden flex items-center bg-blue-600 text-white px-3 py-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-6 w-6" />
      </button>

      <div
        className={`absolute top-14 right-0 bg-white shadow-md rounded-md w-72 px-4 py-1 lg:static lg:flex lg:shadow-none lg:w-auto ${
          isOpen ? "block" : "hidden"
        } lg:flex`}
      >
        <Dropdown
          label="پلی کلینیک:"
          options={[
            "بیمارستان شریعتی",
            "بیمارستان امام خمینی",
            "بیمارستان میلاد",
          ]}
          value={selectedHospital}
          onChange={setSelectedHospital}
        />
        <Dropdown
          options={["روماتولوژی", "قلب و عروق", "اورولوژی"]}
          value={selectedDepartment}
          onChange={setSelectedDepartment}
        />
        <Dropdown
          label="از طرف:"
          options={["محمود اکبریان", "دکتر رضایی", "دکتر تهرانی"]}
          value={selectedSender}
          onChange={setSelectedSender}
        />
      </div>
    </div>
  );
};

export default DropdownCard;
