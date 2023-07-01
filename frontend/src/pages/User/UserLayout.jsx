import React from "react";
import Navigation from "../../components/User/Navigation";

const UserLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navigation />
      {children}
    </React.Fragment>
  );
};

export default UserLayout;
