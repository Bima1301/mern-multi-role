import React from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Leftbar.jsx";
import FooterBottom from "../components/FooterBottom";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="flex flex-row">
        <Sidebar />
        <div className="p-3 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] w-full min-h-full">
          <main>{children}</main>
        </div>
      </div>
      <FooterBottom />
    </React.Fragment>
  );
};

export default Layout;
