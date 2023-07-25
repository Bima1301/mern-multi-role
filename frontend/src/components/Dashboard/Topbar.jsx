import { Fragment } from "react";
import {
  Bars3CenterLeftIcon,
  ChevronDownIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Menu, Transition, Popover } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import DarkModeButton from "../DarkModeButton";

const Topbar = ({ showNav, setShowNav }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  function handleLogout() {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  }
  return (
    <div
      className={`bg-white dark:bg-slate-700 dark:text-white z-20 fixed w-full h-16 flex justify-between gap-2 items-center transition-all duration-[400ms] shadow-md ${
        showNav ? "pl-56" : ""
      }`}
    >
      <div className="lg:pl-16 pl-4 flex flex-row items-center gap-5">
        <Bars3CenterLeftIcon
          className="h-8 w-8 text-gray-700 cursor-pointer dark:text-white"
          onClick={() => setShowNav(!showNav)}
        />
        <p className="font-semibold">Dashboard</p>
      </div>
      {/* <InputSearch
                className={
                    "md:flex hidden md:flex-row lg:w-96 w-40 bg-[#F6F6FB]"
                }
            /> */}
      <div className="flex items-center lg:pr-16 pr-4">
        <Menu as="div" className="relative inline-block text-left">
          <div className="flex">
            <DarkModeButton />
            <Menu.Button className="inline-flex w-full justify-center items-center">
              <picture>
                <img
                  src="/assets/logo.webp"
                  className="rounded-full h-8 md:mr-4 border-2 border-white shadow-sm"
                  alt="profile picture"
                />
              </picture>
              <span className="hidden md:block font-medium text-gray-700 dark:text-white">
                {user?.data.name}
              </span>
              <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-700 dark:text-white" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
              <div className="p-1">
                <Menu.Item
                  onClick={handleLogout}
                  method="post"
                  as="button"
                  className="flex hover:bg-orange-500
                  hover:text-[#67469F] text-gray-700 rounded p-2 text-sm group
                  transition-colors items-center w-full"
                >
                  <ArrowLeftOnRectangleIcon className="h-4 w-4 mr-2" />
                  Log Out
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};
export default Topbar;
