import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const ServicesDropdown: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-black transition px-3 py-1">
        سرویس‌ها <ChevronDown className="ml-2 h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border rounded-md shadow-md w-48">
        <DropdownMenuItem>سرویس ۱</DropdownMenuItem>
        <DropdownMenuItem>سرویس ۲</DropdownMenuItem>
        <DropdownMenuItem>سرویس ۳</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ServicesDropdown;
