import ServicesDropdown from "./ServicesDropDown";
import NavLinks from "./NavLinks";

const SubHeader: React.FC = () => {
  return (
    <nav
      className="bg-white text-black py-2 px-6 shadow-sm flex items-center justify-between w-full 
        md:justify-start"
    >
      <ServicesDropdown />
      <NavLinks />
    </nav>
  );
};

export default SubHeader;
