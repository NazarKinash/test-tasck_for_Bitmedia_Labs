import React from "react";
import Diagram from "../Diagram/Diagram";

const UserData = () => {
  const userName = "Nazar Kinash";

  return (
    <div className="container">
      <h2 className="component--title">{userName}</h2>
      <Diagram title data />
      <Diagram title data />
    </div>
  );
};

export default UserData;
