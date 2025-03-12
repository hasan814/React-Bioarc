import { Outlet } from "react-router-dom";
import DateInfo from "./components/modules/DateInfo/DateInfo";
import Sidebar from "./components/modules/main/Sidebar";
import Header from "./components/layouts/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full">
        <div className="flex w-full">
          <div className="w-1/5 border-b border-r hidden md:block"></div>
          <DateInfo />
        </div>

        <div className="flex w-full flex-col md:flex-row">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
