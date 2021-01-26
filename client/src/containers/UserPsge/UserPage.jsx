import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getUserById } from "../../api/axios_api";
import Footer from "../../components/Footer/Footer";
import SiteNavigation from "../../components/SiteNavigatiom/SiteNavigation";
import UserData from "../../components/UserData/UserData";

const UserPage = () => {
  const [userData, setUserDate] = useState({});
  const [loc, setLoc] = useState([
    { title: "Main page", to: "/" },
    { title: "User satistics", to: "/users" },
  ]);

  const location = useLocation();

  useEffect(() => {
    const user_id = location.pathname.split("/")[location.pathname.split("/").length - 1];
    getUserById(user_id).then((data) => {
      setLoc([...loc, { title: `${data.userName.first_name} ${data.userName.last_name}`, to: location.pathname }]);
      setUserDate(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <SiteNavigation location={loc} />
      <UserData data={userData} />
      <Footer />
    </>
  );
};

export default UserPage;
