import React from "react";
import FooterBottom from "../../components/Dashboard/FooterBottom";
import Navigation from "../../components/Dashboard/Navigation";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen dark:bg-slate-600 bg-slate-200 transition-background">
      <Navigation />
      <main className="">
        <div className="container min-h-full min-w-full py-4">{children}</div>
      </main>
      <FooterBottom />
    </div>
  );
};

export default Layout;
