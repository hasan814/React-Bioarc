import { navItems } from "@/utils/NavLinks";

const NavLinks = () => {
  return (
    <div className="flex space-x-4 flex-wrap">
      {navItems.map((item, index) => (
        <a
          key={index}
          href="#"
          className="text-gray-700 hover:text-black transition px-3 py-1"
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
