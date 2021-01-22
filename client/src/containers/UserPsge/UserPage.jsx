import React from "react";
import Footer from "../../components/Footer/Footer";
import SiteNavigation from "../../components/SiteNavigatiom/SiteNavigation";
import UserData from "../../components/UserData/UserData";

const UserPage = () => {
  return (
    <>
      <SiteNavigation />
      <UserData />
      <Footer />
    </>
  );
};

export default UserPage;
