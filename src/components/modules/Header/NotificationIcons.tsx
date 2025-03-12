import { Bell, Mail, Settings } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const NotificationIcons = () => {
  return (
    <div className="flex space-x-4 border p-1 rounded">
      <Popover>
        <PopoverTrigger>
          <Settings className="cursor-pointer text-white" />
        </PopoverTrigger>
        <PopoverContent className="bg-white p-3 shadow-md rounded-md w-48">
          Settings
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger>
          <Mail className="cursor-pointer text-white" />
        </PopoverTrigger>
        <PopoverContent className="bg-white p-3 shadow-md rounded-md w-48">
          No new messages
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger>
          <Bell className="cursor-pointer text-white" />
        </PopoverTrigger>
        <PopoverContent className="bg-white p-3 shadow-md rounded-md w-48">
          No new notifications
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NotificationIcons;
