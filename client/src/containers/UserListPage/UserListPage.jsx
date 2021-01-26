import React, { useEffect, useState } from "react";
import { getUsers } from "../../api/axios_api";
import Footer from "../../components/Footer/Footer";
import Plaginator from "../../components/Plaginator/Plaginator";
import SiteNavigation from "../../components/SiteNavigatiom/SiteNavigation";
import Statistics from "../../components/Statistics/Statistics";

const UserListPage = () => {
  const [usersList, setUsersList] = useState();
  const [pages, setPages] = useState({ numberOfPage: 1, page: 1 });

  const loc = [
    { title: "Main page", to: "/" },
    { title: "User satistics", to: "/users" },
  ];

  useEffect(() => {
    getUsers(pages.page).then((data) => {
      setUsersList(data.users);
      setPages({ numberOfPage: Number(data.numberOfPage), page: Number(data.page) });
    });
  }, [pages.page]);

  return (
    <div className="page--wrapper">
      <SiteNavigation location={loc} />
      <Statistics usersList={usersList} />
      <Plaginator pages={pages} setPages={setPages} />
      <Footer />
    </div>
  );
};

export default UserListPage;
