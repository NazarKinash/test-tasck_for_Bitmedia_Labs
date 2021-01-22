import React from "react";
import Footer from "../../components/Footer/Footer";
import Plaginator from "../../components/Plaginator/Plaginator";
import SiteNavigation from "../../components/SiteNavigatiom/SiteNavigation";
import Statistics from "../../components/Statistics/Statistics";

const UserListPage = () => {
  return (
    <div className="page--wrapper">
      <SiteNavigation />
      <Statistics />
      <Plaginator />
      <Footer />
    </div>
  );
};

export default UserListPage;
