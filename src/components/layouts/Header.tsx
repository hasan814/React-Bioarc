import NotificationIcons from "../modules/Header/NotificationIcons";
import LanguageSelector from "../modules/Header/LangiagesSelector";
import DropdownCard from "../modules/Header/DropdownCard";
import SubHeader from "../modules/Header/SubHeader";
import Profile from "../modules/Header/Profile";
import Logo from "../modules/Header/Logo";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col w-full">
      <div className="bg-[#5178f5] text-white p-3 flex justify-between items-center shadow-md h-14">
        <Logo />

        <div className="flex space-x-4 items-center">
          <LanguageSelector />
          <NotificationIcons />
          <DropdownCard />
          <Profile />
        </div>
      </div>

      <SubHeader />
    </header>
  );
};

export default Header;
