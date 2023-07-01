import React from "react";
import FooterBottom from "../../components/Dashboard/FooterBottom";
import Navigation from "../../components/Dashboard/Navigation";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navigation />
      <main className="dark:bg-slate-600 bg-white">
        <div className="container min-h-full min-w-full py-4">{children}</div>
      </main>
      <FooterBottom />
    </React.Fragment>
  );
};

export default Layout;
