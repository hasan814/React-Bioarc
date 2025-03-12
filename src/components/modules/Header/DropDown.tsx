import { IDropdownProps } from "@/types";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Dropdown = ({ label, options, value, onChange }: IDropdownProps) => {
  return (
    <div className="flex items-center space-x-2">
      {label && <span className="text-black">{label}</span>}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 py-1 rounded bg-white text-black">
          {value} <ChevronDown className="ml-2 h-4 w-4 text-gray-600" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white rounded-md shadow-md w-48">
          {options.map((option, index) => (
            <DropdownMenuItem key={index} onClick={() => onChange(option)}>
              {option}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
