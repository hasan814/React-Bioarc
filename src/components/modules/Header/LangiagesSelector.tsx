import { ChevronDown } from "lucide-react";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const LanguageSelector: React.FC = () => {
  // ================= States ==================
  const [selectedLang, setSelectedLang] = useState<string>("En");

  // ================= Rendering ==================
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 py-1 text-white text-black rounded-md">
        {selectedLang} <ChevronDown className="ml-2 h-4 w-4 text-gray-600" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border rounded-md shadow-md w-32">
        <DropdownMenuItem onClick={() => setSelectedLang("En")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSelectedLang("Fa")}>
          فارسی
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
