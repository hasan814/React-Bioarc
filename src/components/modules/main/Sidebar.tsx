import { sidebarLinks } from "@/utils/SidebarLinks";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Sidebar: React.FC = () => {
  // ==================== State =====================
  const [active, setActive] = useState<string>(sidebarLinks[0].href);

  // ==================== Rendering =====================
  return (
    <aside className="bg-white w-full md:w-1/5 h-auto md:h-screen border-t md:border-l flex flex-row md:flex-col p-2 md:p-4">
      <span className="mb-2 md:mb-6 text-gray-500 md:w-full w-auto px-2">
        منوی اصلی
      </span>
      <nav className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 w-full overflow-x-auto">
        {sidebarLinks.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 transition",
              active === item.href
                ? "text-blue-600 font-semibold"
                : "hover:bg-gray-100"
            )}
            onClick={() => setActive(item.href)}
          >
            <item.icon className="h-5 w-5" />
            <span className="hidden md:inline">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
