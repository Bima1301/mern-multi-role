import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { sidebarItems } from "./Constant/SidebarList";
import logo from "../../assets/logo.png";
// import InputSearch from "./InputSearch";

const Sidebar = forwardRef(({ showNav }, ref) => {
  const location = useLocation();
  function getLastPartOfPath(path) {
    const parts = path.split("/");
    return parts[parts.length - 1];
  }
  return (
    <div
      ref={ref}
      className="fixed xl:w-64 w-56 h-full bg-[#F1F2F7] dark:bg-slate-800 shadow-xl z-30 transition-all duration-[400ms]s"
    >
      <NavLink to="/" className="flex justify-center mt-6 mb-14">
        <picture className="flex flex-row gap-3 px-20">
          <img className="w-10 h-auto" src={logo} alt="company logo" />
          <p className="text-xl font-extrabold text-cyan-700 dark:text-cyan-500">
            VI APPS
          </p>
        </picture>
      </NavLink>
      {/* <InputSearch
                className={"md:hidden flex flex-row mx-5 mb-5 bg-white"}
            /> */}

      {sidebarItems.map((item, index) => {
        return (
          <div key={index} className="flex flex-col mb-5">
            <p className="px-6 mx-5 mb-3 text-[#082431] text-sm dark:text-white">
              {item.title}
            </p>
            {item.items.map((subItem, subIndex) => (
              <NavLink key={subIndex} to={subItem.link}>
                <div
                  className={`pl-6 py-3 mx-5 rounded-md text-center cursor-pointer mb-3 flex items-center transition-colors ${
                    getLastPartOfPath(location.pathname) == subItem.pageName
                      ? "bg-blue-600 bg-opacity-[0.10000000149011612] text-blue-600 dark:text-blue-300 dark:bg-blue-300 dark:bg-opacity-20"
                      : "text-[#A6ABC8] hover:bg-blue-600 hover:bg-opacity-[0.10000000149011612] hover:text-blue-600 hover:dark:text-blue-400 hover:dark:bg-blue-300 hover:dark:bg-opacity-20"
                  }`}
                >
                  <div className="mr-2">
                    <subItem.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p>{subItem.name}</p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        );
      })}
    </div>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
